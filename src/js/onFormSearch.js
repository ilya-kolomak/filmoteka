import ImageApiService from './mdApiService';
import { refs } from './refs';
import renderMarkupCard from './hero';
import { clearPagination } from './renderPagination';

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
    refs.alarm.classList.remove('is-hidden');
    return;
  }

  imageApiService.searchQuery = query;
  // console.log('imageApiService :>> ', imageApiService);
  console.log('imageApiService :>> ', imageApiService.page);
  clearPage();
  try {
    const { results, total_results } =
    await imageApiService.fetchImagesByQuery();

   if(results.length === 0) {
    refs.alarm.classList.remove('is-hidden');
    refs.alarm.textContent = "Nothing was found for your request.";
   }

    const markup = renderMarkupCard(results);
    photosContainer.insertAdjacentHTML('beforeend', markup);
    clearPagination(total_results);
    return results;
  } catch (error) {
    console.error("Something comes wrong!");
  }
}

function clearPage() {
  imageApiService.resetPage();
  photosContainer.innerHTML = '';
  refs.alarm.classList.add('is-hidden');
}
