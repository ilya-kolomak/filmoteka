import { refs } from './refs';
import createPagination from './pagination';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/src/styles/main.scss';
import { getWatchedFilms, getQueueFilms } from './local_storage';

try {
  refs.btnWatched.addEventListener('click', onBtnWatchedClick);
  refs.btnQueue.addEventListener('click', onBtnQueueClick);
} catch {
  console.log(error);
}

export let currentLibrary = 'watched';
try {
  createPagination(`${currentLibrary}`);
} catch {
  console.log(error);
}

function onBtnWatchedClick(e) {
  e.preventDefault();
  // currentLibrary = 'watched';
  // createPagination(`${currentLibrary}`);
  getWatchedFilms();

  refs.btnWatched.classList.add('header-library__button--current');

  refs.btnQueue.classList.remove('header-library__button--current');
}

function onBtnQueueClick(e) {
  e.preventDefault();
  // currentLibrary = 'queue';
  // createPagination(`${currentLibrary}`);
  getQueueFilms();

  refs.btnWatched.classList.remove('header-library__button--current');

  refs.btnQueue.classList.add('header-library__button--current');
}
