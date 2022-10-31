import { refs } from './refs';
import createPagination from './pagination';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/src/styles/main.scss';

try {
  refs.btnWatched.addEventListener('click', onBtnWatchedClick);
  refs.btnQueue.addEventListener('click', onBtnQueueClick);
} catch {
  // console.log('Немає даних');
}
// createPagination('watched');
export let currentLibrary = 'watched';
try {
  // createPagination(`${currentLibrary}`);
} catch {
  // console.log('Немає даних');
}

function onBtnWatchedClick(e) {
  e.preventDefault();
  currentLibrary = 'watched';
  createPagination(`${currentLibrary}`);

  refs.btnWatched.style.backgroundColor = '#FF6B02';
  refs.btnWatched.style.borderColor = '#FF6B02';
  refs.btnQueue.style.backgroundColor = 'transparent';
  refs.btnQueue.style.borderColor = '#FFFFFF';
}

function onBtnQueueClick(e) {
  e.preventDefault();
  currentLibrary = 'queue';
  // createPagination(`${currentLibrary}`);

  refs.btnQueue.style.backgroundColor = '#ff6b08';
  refs.btnQueue.style.borderColor = '#FF6B02';
  refs.btnWatched.style.backgroundColor = 'transparent';
  refs.btnWatched.style.borderColor = '#FFFFFF';
}
