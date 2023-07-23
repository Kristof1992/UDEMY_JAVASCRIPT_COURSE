// import icons from '../img/icons.svg'; // Parcel 1

import 'core-js/stable'; // polyfilling everything else
import 'regenerator-runtime/runtime'; // polyfilling async/await

import * as model from '../js/model'; // Model imported here
import recipeView from './views/recipeView'; // View imported here

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// Triggers on hashChange & onLoad event.
const controlRecipes = async function () {
  try {
    // Gets the hashcode whenever it loads the recipe
    // Right now it loads it from the hardcoded link
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    // 1) loading recipe
    await model.loadRecipe(id); // invokes -> loadRecipe(hash)
    console.log(id);
    // -> gets recipe field value from model.state
    const { recipe } = model.state;

    // 2) Rendering recipe
    recipeView.render(recipe);
    // renderSpinner(recipeContainer);
    // `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc40?key=${API_KEY}`
  } catch (err) {
    console.error('controller', err);
  }
};

// Adds same funtion to multiple events
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);

// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
