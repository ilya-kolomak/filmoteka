import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
// import ImageApiService from './mdApiService';
import sprite from '../images/arrow.svg';

const paginationContainer = document.querySelector('.tui-pagination');

const options = {
  totalItems: 1000,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{page}}">' +
      '<span class="tui-ico-{{type}}">{{page}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const createPagination = () => {
  const pagination = new Pagination(paginationContainer, options);
  return pagination;
};

export default createPagination;
