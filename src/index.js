import ImageApiService from './js/mdApiService';
import card from './templates/card.hbs';

let photosContainer = document.querySelector('.js-photos-container');

const form = document.querySelector('.js-search-form');
const searchBtn = document.querySelector('.js-search-btn');

const imageApiService = new ImageApiService();

form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  imageApiService.query = e.currentTarget.elements.query;

  imageApiService.resetPage();

  imageApiService.fetchImages().then(({ results }) => {
    appendPhotosMarkup(results);

    console.log(results);
  });
}

function appendPhotosMarkup(results) {
  photosContainer.insertAdjacentHTML('beforeend', card(results));
  console.log(photosContainer);
}
