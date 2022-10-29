import createPagination from './pagination';
import { MoviesApi } from './recuest-popular-movies';

const movies = new MoviesApi();
console.log(movies);

renderPaganation();
// localPagination();

async function renderPaganation() {
  try {
    const page = await movies.getMovies();
    console.log(page.page);
    const pagination = createPagination();
    pagination.movePageTo(page.page);
    pagination.on('afterMove', event => {
      console.log(event);
      const currentPage = event.page;
      // localStorage.setItem('pagination', currentPage);
      console.log(currentPage);
      console.log(page.page);
    });
  } catch (error) {}
}

// function localPagination() {
//   const savePagination = localStorage.getItem('pagination');
//   if (savePagination) {
//     console.log(savePagination);
//   }
// }
