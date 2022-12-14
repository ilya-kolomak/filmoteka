import ImageApiService from './mdApiService';
import { refs } from './refs';
import renderMarkupCard from './hero';
import { clearPagination } from './renderPagination';

let photosContainer = refs.photosContainer;
const imageApiService = new ImageApiService();
refs.form && refs.form.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();

  const query = e.target.searchQuery.value.trim().toLowerCase();
  if (!query) {
    refs.alarm.classList.remove('is-hidden');
    refs.alarm.textContent = 'Please enter something to search!'
    return;
  }
  imageApiService.searchQuery = query;
  try {
    const { results, total_results } =
    await imageApiService.fetchImagesByQuery();
    
    if(results.length === 0) {
     refs.alarm.textContent = 'Nothing was found for your request!';
      refs.alarm.classList.remove('is-hidden');
      return
    }

    clearPage();
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
