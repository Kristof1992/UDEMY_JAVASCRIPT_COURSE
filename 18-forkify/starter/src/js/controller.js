// import icons from '../img/icons.svg'; // Parcel 1

import 'core-js/stable'; // polyfilling everything else
import 'regenerator-runtime/runtime'; // polyfilling async/await

import * as model from '../js/model'; // Model imported here
import recipeView from './views/recipeView'; // View imported here
import searchView from './views/searchVIew'; // View imported here
import resultsView from './views/resultsView';
import paginationView from './views/paginationView';
import bookmarksView from './views/bookmarksView';
import { async } from 'regenerator-runtime';

// if (module.hot) {
//   module.hot.accept();
// }

// ('#5ed6604591c37cdc054bc90b');
// const recipeContainer = document.querySelector('.recipe');
// https://forkify-api.herokuapp.com/v2

// Triggers on hashChange & onLoad event.
const controlRecipes = async function () {
  // console.log(e);
  try {
    // Gets the hashcode whenever it loads the recipe
    // Right now it loads it from the hardcoded link
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    bookmarksView.update(model.state.bookmarks);
    // 0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage()); // convoluted
    // Updates Bookmarst tab to mark currently selected recipe

    // 1) loading recipe
    await model.loadRecipe(id); // invokes -> loadRecipe(hash)
    // -> gets recipe field value from model.state
    const { recipe } = model.state;

    // const view = new View();
    // view.render(recipe);
    // 2) Rendering recipe
    recipeView.render(recipe);
    // renderSpinner(recipeContainer);
    // `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcc40?key=${API_KEY}`
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    // 1) Get search query
    const query = searchView.getQuery(); // keyword
    if (!query) return;
    // 2) Load search results
    await model.loadSearchResults(query);
    // 3) Render results
    resultsView.render(model.getSearchResultsPage());
    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (goToPage) {
  // 1) Render New results
  resultsView.render(model.getSearchResultsPage(goToPage));
  // 2) Render New pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update recipe servings (in state)
  model.updateServings(newServings);
  // Update the recipe view
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // Add remove bookmark
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.deleteBookmark(model.state.recipe.id);
  }
  //Update recipeView
  recipeView.update(model.state.recipe);
  // Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

// Adds onload event to refresh bookmarks
const controlBookmarks = function () {
  model.loadBookmarksCache();
  bookmarksView.render(model.state.bookmarks);
};

// App Start
const init = function () {
  // window.location.hash = '';
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();

// For Debugging
const clearBookmarks = function () {
  localStorage.clear('bookmarks');
  model.state.bookmarks = [];
};
clearBookmarks();
