import createPagination from './pagination';
import { MoviesApi } from './recuest-popular-movies';
<<<<<<< HEAD

const data = new MoviesApi();
=======
>>>>>>> 884446346d1d359c150d0f6d3e0cca7e2e695e77

renderPaganation();
localPagination();

<<<<<<< HEAD
async function renderPaganation() {
=======
const data = new MoviesApi();
console.log(data);

function renderPaganation() {
>>>>>>> 884446346d1d359c150d0f6d3e0cca7e2e695e77
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
