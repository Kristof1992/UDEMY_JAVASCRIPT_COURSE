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

  // Receives new DATA which is updated for the View object.
  // Once differences found elements get updated HTML text and attributes.
  // prettier-ignore
  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // Update changed text
      if (!newEl.isEqualNode(curEl) && newEl?.firstChild?.nodeValue.trim() !== '') {
        curEl.textContent = newEl.textContent;
      }

      // Updates changed attributes
      if(!newEl.isEqualNode(curEl)) {
        // console.log(Array.from(newEl.attributes));
        Array.from(newEl.attributes).forEach((attr) => curEl.setAttribute(attr.name, attr.value));
        // console.log(newEl.attributes);
      }

    });
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