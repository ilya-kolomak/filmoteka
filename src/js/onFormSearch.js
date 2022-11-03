import ImageApiService from './mdApiService';
import { refs } from './refs';
import renderMarkupCard from './hero';
import { clearPagination } from './renderPagination';
import createPagination from './pagination';

let photosContainer = refs.photosContainer;
const imageApiService = new ImageApiService();
refs.form && refs.form.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();

  // const {
  //   elements: { searchQuery },
  // } = e.currentTarget;

  const query = e.target.searchQuery.value.trim().toLowerCase();
  if (!query) {
    return;
  }

  imageApiService.searchQuery = query;
  // console.log('imageApiService :>> ', imageApiService);
  console.log('imageApiService :>> ', imageApiService.page);
  clearPage();
  try {
    const { results, total_results } =
      await imageApiService.fetchImagesByQuery();
    console.log(results);
    console.log(total_results);
    const markup = renderMarkupCard(results);
    photosContainer.insertAdjacentHTML('beforeend', markup);
    clearPagination(total_results);
    return results;
  } catch (error) {}
}

function clearPage() {
  imageApiService.resetPage();
  photosContainer.innerHTML = '';
}
