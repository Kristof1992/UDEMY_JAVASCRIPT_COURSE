import { async } from 'regenerator-runtime';
import { API_KEY, API_URL, RES_PER_PAGE, DEFAULT_PAGE } from './config.js';
import { getJSON } from './helpers.js';

// https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=${API_KEY}
// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>
// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=${API_KEY}

/**
 * Stores the:
 * currentRecipe Obj {}
 * search
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

// Queries data from api and stores it in state.recipe object
export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}?key=${API_KEY}`);
    // Processing Obj and storing it.
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
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
    const data = await getJSON(`${API_URL}?search=${query}&key=${API_KEY}`);
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        image: rec.image_url,
        publisher: rec.publisher,
        title: rec.title,
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

export const addBookmark = function (recipe) {
  state.bookmarks.push(recipe);
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
};

export const deleteBookmark = function (id) {
  // Delete bookmark
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  if (id === state.recipe.id) state.recipe.bookmarked = false;
};
