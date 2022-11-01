import createPagination from './pagination';
import ImageApiService from './mdApiService';
import renderMarkupCard from './hero';
import { refs } from './refs';

if (refs.isLibraryPage) {
  return;
}

const moviesList = new ImageApiService();
const photosContainer = document.querySelector('.js-photos-container');
window.addEventListener('load', renderPagination);

// localPagination();

async function renderPagination() {
  try {
    rednerCard();
    const pagination = createPagination();
    pagination.on('afterMove', event => {
      const currentPage = event.page;
      console.log('moviesList', moviesList);
      moviesList.page = currentPage;
      rednerCard(currentPage);
    });
  } catch (error) {}
}

async function rednerCard() {
  clearPage();
  try {
    const { results } = await moviesList.fetchImages();
    const markup = renderMarkupCard(results);
    photosContainer.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error)
  }
}

function clearPage() {
  photosContainer.innerHTML = '';
}

// function localPagination() {
//   const savePagination = localStorage.getItem('pagination');
//   if (savePagination) {
//     console.log(savePagination);
//   }
// }
