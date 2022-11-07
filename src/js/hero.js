import ImageApiService from './mdApiService';
import { getSelectedMovie } from './modalMovieMarkup';
import { getGenders } from './getGenresbyId';

// import { getGenresForCard } from './getGenres';

let photosContainer = document.querySelector('.js-photos-container');
const imageApiService = new ImageApiService();

export default function renderMarkupCard(results) {
  getSelectedMovie(photosContainer, results);

  imageApiService.fetchImages();

  return results
    .map(
      ({ poster_path, title, original_title, release_date, genre_ids, id }) => {
        console.log('release_date :>> ', release_date);
        const movieGenderesList = getGenders(genre_ids).join(', ');
        console.log(movieGenderesList);
        return ` <li class="hero-item" data-id="${id}">
   
    <div class="hero-thumb">
    <img
     src="https://image.tmdb.org/t/p/w500/${poster_path}"
    alt="${title}" loading="lazy" class="img-item" />
    </div>
    <div class="hero-info">
      <p class="film-title">${original_title}</p>
       <p class="film-info">${movieGenderesList}|</p>
      <p class="film-info">${release_date ? release_date.split('-')[0] : ''}</p>
    </div>
   </li>`;
      }
    )
    .join('');
}
