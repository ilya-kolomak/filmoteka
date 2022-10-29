import { refs } from './refs';
import createPagination from './pagination';

try {
  refs.btnWatched.addEventListener('click', onBtnWatchedClick);
  refs.btnQueue.addEventListener('click', onBtnQueueClick);
} catch {
  // console.log('Немає даних');
}
// createPagination('watched');
export let currentLibrary = 'watched';
try {
  createPagination(`${currentLibrary}`);
} catch {
  // console.log('Немає даних');
}

function onBtnWatchedClick(e) {
  currentLibrary = 'watched';
  createPagination(`${currentLibrary}`);

  refs.btnWatched.style.backgroundColor = '#FF6B02';
  refs.btnWatched.style.borderColor = '#FF6B02';
  refs.btnQueue.style.backgroundColor = 'transparent';
  refs.btnQueue.style.borderColor = '#FFFFFF';
}

function onBtnQueueClick(e) {
  currentLibrary = 'queue';
  createPagination(`${currentLibrary}`);

  refs.btnQueue.style.backgroundColor = '#ff6b08';
  refs.btnQueue.style.borderColor = '#FF6B02';
  refs.btnWatched.style.backgroundColor = 'transparent';
  refs.btnWatched.style.borderColor = '#FFFFFF';
}
