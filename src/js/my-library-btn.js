import { refs } from './refs';
import createPagination from './pagination';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/src/styles/main.scss';
import { getWatchedFilms, getQueueFilms } from './local_storage';
import { getSelectedMovie } from './modalMovieMarkup';
import ImageApiService from './mdApiService';
import renderMarkupCard from './hero';
import { loadedStoredData } from './movieLocalStorage';

if (!refs.isLibraryPage) {
  return;
}

const imageApiService = new ImageApiService();
// getSelectedMovie(photosContainer, results);
const { photosContainer } = refs;

let isWatchedVisible = true;
let isQueueVisible = false;
let watchedResults = [];
let queueResults = [];
let unitedList = [];
let allMovieCards = [];
let storedData = {};

renderLibrary();

function renderLibraryList(results) {
  const markup = renderMarkupCard(results);

  photosContainer.insertAdjacentHTML('beforeend', markup);
}

export async function renderLibrary() {
  if (!refs.isLibraryPage) {
    return;
  } 

  storedData = loadedStoredData();
  watchedResults = await getLibraryData(storedData.watchedMoviesIds);
  queueResults = await getLibraryData(storedData.queueMoviesIds);
  unitedList = [...watchedResults, ...queueResults];

  console.log('unitedList', unitedList);
  
  renderLibraryList(unitedList);

  filterMoviesCategorry()
}

function filterMoviesCategorry() {

  storedData = loadedStoredData();


  allMovieCards = [...document.querySelectorAll('.hero-item')];

  allMovieCards.forEach((card, index) => {
    // debugger
    if (isWatchedVisible) {
      if (index < watchedResults.length) {
        card.classList.remove('hidden')
      } else {
        card.classList.add('hidden')
      }
    }

    if (isQueueVisible) {
      if (index >= watchedResults.length) {
        card.classList.remove('hidden')
      } else {
        card.classList.add('hidden')
      }
    }
  })
  if (isWatchedVisible) {
    if (storedData.watchedMoviesIds.length) {
      refs.nothingWatch.classList.add('hidden');
    } else {
      refs.nothingWatch.classList.remove('hidden');
    }
  }
  if (isQueueVisible) {
    if (storedData.queueMoviesIds.length) {
      refs.nothingWatch.classList.add('hidden');
    } else {
      refs.nothingWatch.classList.remove('hidden');
    }
  }
}

async function getLibraryData(ids) {
  const data = [];
  for (let id of ids) {
    const fetchedMovieData = await imageApiService.fetchImageById(id);
    data.push(...fetchedMovieData.movie_results);
  }

  return data;
}

export function removeFromList(id) {
console.log('id', id);
  if (!refs.isLibraryPage) {
    return;
  }

  if (isWatchedVisible) {
    const removedMovie = allMovieCards.slice(0, watchedResults.length).find(card => Number(card.dataset.id) === id).classList.add('removed');
    console.log('removedMovie', removedMovie);
  }
  
  if (isQueueVisible) {
    const removedMovie = allMovieCards.slice(isQueueVisible.length).find(card => Number(card.dataset.id) === id).classList.add('removed');
    console.log('removedMovie', removedMovie);
  }

  filterMoviesCategorry()
}

export function addToList(id) {

  if (!refs.isLibraryPage) {
    return;
  }

  if (isWatchedVisible) {
    const removedMovie = allMovieCards.slice(0, watchedResults.length).find(card => Number(card.dataset.id) === id).classList.remove('removed');
    console.log('removedMovie', removedMovie);
  }
  
  if (isQueueVisible) {
    const removedMovie = allMovieCards.slice(isQueueVisible.length).find(card => Number(card.dataset.id) === id).classList.remove('removed');
    console.log('removedMovie', removedMovie);
  }

  filterMoviesCategorry()
}

refs.libraryWatched.addEventListener('click', () => {
  isWatchedVisible = true;
  isQueueVisible = false;

  filterMoviesCategorry()
});

refs.libraryQueue.addEventListener('click', () => {
  isWatchedVisible = false;
  isQueueVisible = true;

  filterMoviesCategorry()
});
// renderMarkupCard()
