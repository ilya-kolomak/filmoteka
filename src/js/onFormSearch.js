import ImageApiService from './mdApiService';
import { refs } from './refs';
import renderMarkupCard from './hero';
import createPagination from './pagination';

let photosContainer = refs.photosContainer;
const imageApiService = new ImageApiService();
refs.form && refs.form.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();
  const {
    elements: { searchQuery },
  } = e.currentTarget;
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) {
    return;
  }
  imageApiService.query = query;
  clearPage();
  try {
    const { results } = await imageApiService.fetchImagesByQuery();
    const markup = renderMarkupCard(results);
    photosContainer.insertAdjacentHTML('beforeend', markup);
    return results;
  } catch (error) {}
}

function clearPage() {
  imageApiService.resetPage();
  photosContainer.innerHTML = '';
}
