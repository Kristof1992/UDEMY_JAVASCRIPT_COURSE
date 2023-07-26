import View from './View';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again!';
  _message = '';

  // Here this._data is an Array with x > 0 elements
  _generateMarkup() {
    return this._data
      .map(el => {
        return this._generateMarkupPreview(el);
      })
      .join('');
  }

  _generateMarkupPreview(el) {
    // preview__link--active

    // <div class="preview__user-generated">
    //       <svg>
    //           <use href="${icons}#icon-user"></use>
    //       </svg>
    //       </div>
    return `
    <li class="preview">
      <a class="preview__link" href="#${el.id}">
      <figure class="preview__fig">
          <img src="${el.image}" alt="${el.title}" />
      </figure>
      <div class="preview__data">
          <h4 class="preview__title">${el.title}</h4>
          <p class="preview__publisher">${el.publisher}</p>
          
      </div>
      </a>
    </li>`;
  }
}

export default new ResultsView();
