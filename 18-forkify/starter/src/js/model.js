import { async } from 'regenerator-runtime';
import { API_KEY, API_URL, RES_PER_PAGE, DEFAULT_PAGE } from './config.js';
import { AJAX, generateApiPostQuery } from './helpers.js';

// https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=${API_KEY}
// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>
// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=${API_KEY}

/**
 * Stores the:
 * currentRecipe Obj {}
 * search
 * recipe object will have a dynamic  bookmark field
 */
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
};

// Queries data from api and stores it in state.recipe object
// Triggers on onLoad event and hashchange
export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id}?key=${API_KEY}`);
    state.recipe = createRecipeObject(data);

    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (err) {
    throw err;
  }
};

// Stores recently entered keyword and list of recipes in results.
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await AJAX(`${API_URL}?search=${query}&key=${API_KEY}`);
    console.log(data);
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        image: rec.image_url,
        publisher: rec.publisher,
        title: rec.title,
        ...(rec.key && { key: rec.key }),
      };
    });
    // Resetting page
    state.search.page = 1;
  } catch (err) {
    throw err;
  }
};

/**
 *
 * @param {*} page - DEFAULT_PAGE = 1 in config
 * @returns a new [] with a portion of the queried data between
 * start and end values
 */
export const getSearchResultsPage = function (page = DEFAULT_PAGE) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage; // 0
  const end = page * state.search.resultsPerPage; // 9
  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    // newQt = oldQt * newServings / oldServings // 2 * 8 / 4 = 4
  });
  state.recipe.servings = newServings;
};

export const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  state.bookmarks.push(recipe);
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  persistBookmarks(); // Update browser bookmarks' data
};

export const deleteBookmark = function (id) {
  // Delete bookmark
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  if (id === state.recipe.id) state.recipe.bookmarked = false;
  persistBookmarks(); // Update browser bookmarks' data
};

export const loadBookmarksCache = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};

// For Debugging
const clearBookmarks = function () {
  localStorage.clear('bookmarks');
  state.bookmarks = [];
};
clearBookmarks();

// prettier-ignore
export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
    .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
    .map(ing => {
      // const ingArr = ing[1].replaceAll(' ', '').split(',');
      const ingArr = ing[1].split(',').map(el=> el.trim());
      if(ingArr.length !== 3) throw new Error('Wrong ingredient format! Please use the correct format :)');
      const [quantity, unit, description] = ingArr;
      return { quantity: quantity ? +quantity : null, unit, description };
    });

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    }

  const data = await AJAX(generateApiPostQuery(recipe.title), recipe);
  state.recipe = createRecipeObject(data);
  addBookmark(state.recipe);
  } catch(err) {
    throw err;
  }
  
};
