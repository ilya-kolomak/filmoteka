import createPagination from './pagination';
import { MoviesApi } from './recuest-popular-movies';

const data = new MoviesApi();

renderPaganation();
localPagination();

async function renderPaganation() {
  try {
    const movies = await data.getMovies();
    console.log(movies.page);
    const pagination = createPagination();
    pagination.movePageTo(movies.page);
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
