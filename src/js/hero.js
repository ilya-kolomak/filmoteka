// import ImageApiService from './mdApiService';
import { getSelectedMovie } from './modalMovieMarkup';

let photosContainer = document.querySelector('.js-photos-container');
// const imageApiService = new ImageApiService();

export default function renderMarkupCard(results) {
  getSelectedMovie(photosContainer, results);
  return results
    .map(
      ({ poster_path, title, original_title, release_date, genre_ids, id }) => {
        console.log('release_date :>> ', release_date);
        return ` <li class="hero-item" data-id="${id}">
      <div class="btn-id">
      <button data-id='${id}' class="btn-youtube">
         <div class="overlay-btn-youtube-text" data-id='${id}'>
            <h2 class="btn-youtube-text" data-id='${id}'>Movie Trailer</h2>
         </div>
      </button>
    <div class="hero-thumb">
    <img
     src="https://image.tmdb.org/t/p/w500/${poster_path}"
    alt="${title}" loading="lazy" class="img-item" />
    </div>
    <div class="hero-info">
      <p class="film-title">${original_title}</p>
       <p class="film-info">${genre_ids}|</p>
      <p class="film-info">${release_date ? release_date.split('-')[0] : ''}</p>
    </div>
   </li>`;
      }
    )
    .join('');
}
