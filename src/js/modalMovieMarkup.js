import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/src/styles/main.scss';
// import { getGenresForModal } from './getGenres';

let watchedMoviesIds = [];
let queueMoviesIds = [];

function loadedStoredData() {
  const storedData = localStorage.getItem('watched');
  const storedQueue = localStorage.getItem('queue');
  if (storedData) {
    watchedMoviesIds = JSON.parse(storedData);
  }
  if (storedQueue) {
    queueMoviesIds = JSON.parse(storedQueue);
  }
}

export function getSelectedMovie(movieContainer, results) {
  loadedStoredData();
  movieContainer.addEventListener('click', ({ target }) => {
    const liElem = target.closest('.hero-item');
    if (!liElem) {
      return;
    }
    const { id } = liElem.dataset;
    const selectedMovie = results.find(result => result.id === Number(id));
    renderModal(selectedMovie);
  });
}

function isWatchedMovie(id) {
  return watchedMoviesIds.find(currId => currId === id);
}

function isQueueMovie(id) {
  return queueMoviesIds.find(currId => currId === id);
}

export function renderModal(movieEl) {
  const {
    poster_path,
    overview,
    genres,
    id,
    original_title,
    title,
    popularity,
    vote_count,
    vote_average,
  } = movieEl;

  const isWatched = isWatchedMovie(id);
  const isQueued = isQueueMovie(id);
  const buttonText = isWatched ? 'Remove from watched' : 'Add to watched';
  const queueBthText = isQueued ? 'Remove from queue' : 'Add to queue';

  let modalRenderHTML = basicLightbox.create(
    `    
        <div class="modal-main modal-container">
         <button type="button" class="modal-main__btn-close">
           <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute"><path d="m8 8 14 14M8 22 22 8" stroke="#000" stroke-width="2"/></svg>
           </button>
                 <div class="modal-main__modal-card">
                 <picture>
                 <source media="(min-width: 1280px)" srcset="
                              https://image.tmdb.org/t/p/w342${poster_path} 1x,
                              https://image.tmdb.org/t/p/w780${poster_path} 2x,
                              https://image.tmdb.org/t/p/original${poster_path} 3x
                           " type="image/jpg" />
                  <source media="(min-width: 768px)" srcset="
                              https://image.tmdb.org/t/p/w342${poster_path} 1x,
                              https://image.tmdb.org/t/p/w500${poster_path} 2x,
                              https://image.tmdb.org/t/p/original${poster_path} 3x
                           " type="image/jpg" />
                  <source media="(max-width: 767px)" srcset="
                              https://image.tmdb.org/t/p/w342${poster_path} 1x,
                              https://image.tmdb.org/t/p/w500${poster_path} 2x,
                              https://image.tmdb.org/t/p/w780${poster_path} 3x
                           " type="image/jpg" />
                  <img class="modal-main__modal-img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title} poster" loading="lazy" />
                 </picture>
            <div class="modal-main__about-movie about-movie">
                <h2 class="about-movie__title">${title}</h2>
                <p class="about-movie__title--movie">Vote / Votes <span class="about-movie__about--rating" data-digits-counter>${vote_average}</span><span
                        class="about-movie__slech"> / </span> <span
                        class="about-movie__text--black" data-digits-counter>${vote_count}</span>
                        </p>
                <p class="about-movie__title--movie">Popularity<span
                        class="modal__about--text--popularity" data-digits-counter>${popularity}</span>
                <p class="about-movie__title--movie">Original Title<span class="modal__about--text--original--title">A
                        ${original_title}</span>
                <p class="about-movie__title--movie">Genre<span class="modal__about--text--genre">${genres}</span>
                </p>
                </p>
                <p class="about__movie--text">About</p>
                <p class="about__movie--text--content">${overview}</p>
                <ul class="list__btn--add">
                    <li class="watched-item"><button class="add__watched" data-id="${id}" type="button">${buttonText}</button></li>
                    <li class="queue-item"><button class="add__queue" data-id="${id}" type="button">${queueBthText}</button></li>
                </ul>
             </div>
          </div>
        </div>  
      </div>
      `,
    {
      onShow: modalRenderHTML => {
        modalRenderHTML
          .element()
          .querySelector('.modal-main__btn-close').onclick =
          modalRenderHTML.close;
      },
    }
  );
  modalRenderHTML.show();

  document.querySelector('.add__watched').addEventListener('click', event => {
    if (isWatchedMovie(id)) {
      watchedMoviesIds = watchedMoviesIds.filter(watchedId => watchedId != id);
      event.target.textContent = 'add to watched';
    } else {
      watchedMoviesIds.push(id);
      event.target.textContent = 'remove from watched';
    }
    localStorage.setItem('watched', JSON.stringify(watchedMoviesIds));
  });

  document.querySelector('.add__queue').addEventListener('click', event => {
    if (isQueueMovie(id)) {
      queueMoviesIds = queueMoviesIds.filter(queuedId => queuedId != id);
      event.target.textContent = 'add to queue';
    } else {
      queueMoviesIds.push(id);
      event.target.textContent = 'remove from queue';
    }
    localStorage.setItem('queue', JSON.stringify(queueMoviesIds));
  });
}
