import icons from 'url:../../img/icons.svg';
import View from './View';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      //console.log(btn);
      const gotoPage = +btn.dataset.goto;

      handler(gotoPage);
    });
  }

  _generateMarkup() {
    let currBtn = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    if (this._data.page === 1 && numPages > 1) {
      return `<button button data-goto="${
        currBtn + 1
      }" class="btn--inline pagination__btn--next">
    <span>Page ${this._data.page + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>`;
    }

    if (this._data.page === numPages && numPages > 1) {
      return ` <button data-goto="${
        currBtn - 1
      }" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${currBtn - 1}</span>
  </button>`;
    }

    if (this._data.page < numPages) {
      return `<button button data-goto="${
        currBtn - 1
      }"  class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${currBtn - 1}</span>
  </button>
  
  <button button data-goto="${
    currBtn + 1
  }" class="btn--inline pagination__btn--next">
    <span>Page ${currBtn + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>`;
    }

    return 'only 1 page';
  }
}

export default new PaginationView();
