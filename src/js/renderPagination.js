import createPagination from './pagination';
import ImageApiService from './mdApiService';
import renderMarkupCard from './hero';

const moviesList = new ImageApiService();
console.log(moviesList);
const photosContainer = document.querySelector('.js-photos-container');
window.addEventListener('load', renderPaganation);

// localPagination();

async function renderPaganation() {
  try {
    rednerCard();
    const pagination = createPagination();
    pagination.on('afterMove', event => {
      const currentPage = event.page;
      moviesList.page = currentPage;
      rednerCard(currentPage);
    });
  } catch (error) {}
}

async function rednerCard() {
  clearPage();
  try {
    const { results } = await moviesList.fetchImages();
    console.log(results);
    const markup = renderMarkupCard(results);
    photosContainer.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    clearPage();
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
