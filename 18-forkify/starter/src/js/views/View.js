import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  /**
   * @param {*} data: recipeObj for rendering
   * Saves recipe to RecipeViewObj
   * Dynamically generates RecipeView [HTML]
   * Clears Parent element so newly inserted HTML will have its own space.
   * Inserts newly created HTML to DOM
   */
  render(data) {
    // Checks if data is falsy OR it is an empty Array
    // We want an array with x > 0 elements
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  // _generateMarkup() {
  //   throw new Error('Implement this method!');
  // }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  // Adds spinner when rendering recipe used from Controller
  // and injects to DOM
  renderSpinner = function () {
    const markup = `
      <div class="spinner">
          <svg>
              <use href="${icons}#icon-loader"></use>
          </svg>
      </div>
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  };

  renderError(message = this._errorMessage) {
    const markup = `<div class="error">
              <div>
                <svg>
                  <use href="${icons}#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>${message}</p>
            </div>
            `;
    this._clear();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  renderMessage(message = this._message) {
    const markup = `
          <div class="message">
            <div>
              <svg>
                <use href="${icon}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
      `;
  }
}
