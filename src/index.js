import ImageApiService from './js/mdApiService';
import GenresApiService from './js/genresApi';

const STORAGE_KEY_GENRES = `genres`;
const STORAGE_KEY_RESULTS = `results`;
let photosContainer = document.querySelector('.js-photos-container');
let merged = {};
const form = document.querySelector('.js-search-form');
const searchBtn = document.querySelector('.js-search-btn');

const imageApiService = new ImageApiService();
const genresApiService = new GenresApiService();
form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  imageApiService.query = e.currentTarget.elements.query;

  imageApiService.fetchImages().then(({ results }) => {
    localStorage.setItem(STORAGE_KEY_RESULTS, JSON.stringify({ results }));

    return results;
  });

  genresApiService.fetchGenres().then(({ genres }) => {
    localStorage.setItem(STORAGE_KEY_GENRES, JSON.stringify({ genres }));
    return genres;
  });

  renderMarkupCard();
}

function addGenresToResults() {
  const savedResults = JSON.parse(localStorage.getItem(STORAGE_KEY_RESULTS));
  const savedGenres = JSON.parse(localStorage.getItem(STORAGE_KEY_GENRES));
  console.log(savedGenres);
  console.log(savedResults);

  let merged = { ...savedResults, ...savedGenres };

  // console.log(merged);
  return merged;
}

function renderMarkupCard(obj) {
  addGenresToResults();

  const markup = obj.merged
    .map(
      ({
        results: [{ poster_path, title, original_title, release_date }],
        genres: [{ name }],
      }) => {
        return ` <li class="hero-item">
    <div class="hero-thumb">
    <img
     src="${poster_path}"
    alt="${title}" loading="lazy" class="img-item" />
    </div>
    <div class="hero-info">
      <p class="film-title">${original_title}</p>
      <p class="film-info">${name}|</p>
      <p class="film-info">${release_date}</p>
    </div>
   </li>`;
      }
    )
    .join('');

  photosContainer.insertAdjacentHTML('beforeend', markup);
}
