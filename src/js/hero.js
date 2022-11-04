import ImageApiService from './mdApiService';
import { getSelectedMovie } from './modalMovieMarkup';
import { changeGenresIdToName } from './changesGenresIdToName';
import createMarkUp from '../templates/film-cards.hbs';

// import { getGenresForCard } from './getGenres';

let photosContainer = document.querySelector('.js-photos-container');
const imageApiService = new ImageApiService();

export default async function renderMarkupCard(results) {
  getSelectedMovie(photosContainer, results);
  const listOfMovies = await imageApiService.fetchImages();
  await changeGenresIdToName(listOfMovies.results);
  const markup = createMarkUp(listOfMovies.results);
  console.log(markup);
  photosContainer.innerHTML = markup;
  console.log(listOfMovies);
  // const genres = async function changeGenresIdToName(movies);

  // changeGenresIdToName({ genres });
}
