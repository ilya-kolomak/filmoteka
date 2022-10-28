import { refs } from './refs';
import createPagination from './pagination';

try {
  refs.btnWatched.addEventListener('click', onBtnWatchedClick);
  refs.btnQueue.addEventListener('click', onBtnQueueClick);
} catch {
  // console.log('Немає даних');
}
