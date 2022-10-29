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
    console.log(results);
    const markup = renderMarkupCard(results);
    console.log(markup);
    photosContainer.insertAdjacentHTML('beforeend', markup);
    // return results;
  });

  // genresApiService.fetchGenres().then(({ genres }) => {
  //   localStorage.setItem(STORAGE_KEY_GENRES, JSON.stringify({ genres }));
  //   // return genres;
  // });
  // const markup = renderMarkupCard(merged);
  // console.log(markup);
  // // renderMarkupCard();
}

// function addGenresToResults() {
//   const savedResults = JSON.parse(localStorage.getItem(STORAGE_KEY_RESULTS));
//   const savedGenres = JSON.parse(localStorage.getItem(STORAGE_KEY_GENRES));
//   console.log(savedGenres);
//   console.log(savedResults);

//   let merged = { ...savedResults, ...savedGenres };

//   console.log(merged);
//   // return merged;
// }

function renderMarkupCard(results) {
  // addGenresToResults();

  return results
    .map(({ poster_path, title, original_title, release_date }) =>
      // genres: [{ name }],
      {
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
}

// function renderMarkupCard(merged) {
//   // addGenresToResults();

//   return merged
//     .map(
//       ({
//         results: { poster_path, title, original_title, release_date },
//         genres: { name },
//       }) => {
//         return ` <li class="hero-item">
//     <div class="hero-thumb">
//     <img
//      src="${poster_path}"
//     alt="${title}" loading="lazy" class="img-item" />
//     </div>
//     <div class="hero-info">
//       <p class="film-title">${original_title}</p>
//       <p class="film-info">${name}|</p>
//       <p class="film-info">${release_date}</p>
//     </div>
//    </li>`;
//       }
//     )
//     .join('');

//   photosContainer.insertAdjacentHTML('beforeend', markup);
// }

import('./js/recuest-popular-movies');
import('./js/renderPagination');
import('./js/modal-dreamTeam');
