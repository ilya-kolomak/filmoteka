import createPagination from './pagination';
import { MoviesApi } from './recuest-popular-movies';

renderPaganation();
localPagination();

const data = new MoviesApi();
console.log(data);

function renderPaganation() {
  try {
    const pagination = createPagination();
    pagination.on('afterMove', event => {
      const currentPage = event.page;
      localStorage.setItem('pagination', currentPage);
      console.log(currentPage);
      return currentPage;
    });
  } catch (error) {}
}

function localPagination() {
  const savePagination = localStorage.getItem('pagination');
  if (savePagination) {
    console.log(savePagination);
  }
}
