import View from './View';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline'); // closest searches upwards in the chain
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  //   prettier-ignore
  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

    // Page first and Pages > 1
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButtons(curPage, 'start');
    }
    // Page last and Pages > 1
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButtons(curPage, 'end');
    }
    // Page last and Pages > 1
    if (curPage < numPages) {
      return this._generateMarkupButtons(curPage, 'middle');
    }
    return '';
  }

  // prettier-ignore
  _generateMarkupButtons(curPage, position) {
    switch (position) {
      case 'start':
        return `<button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
                  <span>Page ${curPage + 1}</span>
                  <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                  </svg>
                </button>
      `;
      case 'middle':
        return `<button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
                  <span>Page ${curPage - 1}</span>
                  <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                  </svg>
                </button>
                <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
                  <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                  </svg>
                  <span>Page ${curPage + 1}</span>
                </button>
      `;
      case 'end':
        return `<button data-goto="${curPage - 1}"class="btn--inline pagination__btn--prev">
                  <svg class="search__icon">
                      <use href="${icons}#icon-arrow-left"></use>
                  </svg>
                  <span>Page ${curPage - 1}</span>
                </button>
     `;
      default:
        return ''; // Just to satisfy switch's default.
    }
  }
}

export default new PaginationView();
