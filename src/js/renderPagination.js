import createPagination from './pagination';
import ImageApiService from './mdApiService';
import render from './hero';

const moviesList = new ImageApiService();
console.log(moviesList);

renderPaganation();
// localPagination();

async function renderPaganation() {
  try {
    const movies = await moviesList.fetchImages();
    const pagination = createPagination();
    pagination.movePageTo(movies.page);
    pagination.on('afterMove', event => {
      const currentPage = event.page;
      movies.page = currentPage;
      render(currentPage);

      // localStorage.setItem('pagination', currentPage);
      console.log(currentPage);
      console.log(movies.page);
    });
  } catch (error) {}
}

// function localPagination() {
//   const savePagination = localStorage.getItem('pagination');
//   if (savePagination) {
//     console.log(savePagination);
//   }
// }
