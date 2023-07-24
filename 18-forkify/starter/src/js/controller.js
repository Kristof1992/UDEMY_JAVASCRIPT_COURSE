// import icons from '../img/icons.svg'; // Parcel 1

import 'core-js/stable'; // polyfilling everything else
import 'regenerator-runtime/runtime'; // polyfilling async/await

import * as model from '../js/model'; // Model imported here
import recipeView from './views/recipeView'; // View imported here
import searchView from './views/searchVIew'; // View imported here

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
    // -> gets recipe field value from model.state
    const { recipe } = model.state;

    // 2) Rendering recipe
    recipeView.render(recipe);
    // renderSpinner(recipeContainer);
    // `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc40?key=${API_KEY}`
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    // 1) Get search query
    const query = searchView.getQuery();
    console.log(query);
    if (!query) throw new Error('Empty Query');
    // 2) Load search results
    await model.loadSearchResults(query);
    // 3) Render results
    console.log(model.state.search.results);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
