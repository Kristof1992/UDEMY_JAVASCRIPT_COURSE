import { async } from 'regenerator-runtime';
import { API_KEY, API_URL } from './config.js';
import { getJSON } from './helpers.js';

// https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=${API_KEY}

export const state = {
  recipe: {},
};

// Queries data from api and stores it in state.recipe object
export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}?key=${API_KEY}`);
    console.log('Shouldn t execute');
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
    console.error('model', err);
  }
};
