import { async } from 'regenerator-runtime';
import { API_KEY, API_URL } from './config.js';
import { getJSON } from './helpers.js';

// https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=${API_KEY}
// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>
// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=${API_KEY}

// Cache?
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};

// Queries data from api and stores it in state.recipe object
export const loadRecipe = async function (id = '5ed6604591c37cdc054bc90b') {
  try {
    const data = await getJSON(`${API_URL}${id}?key=${API_KEY}`);
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
  } catch (err) {
    throw err;
  }
};

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
  } catch (err) {
    throw err;
  }
};
