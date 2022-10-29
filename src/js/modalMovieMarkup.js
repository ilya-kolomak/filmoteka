import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/src/styles/main.scss';

// function onKeyDownCloseModal(e) {
//   if (e.code === 'Escape') {
//     document.removeEventListener('keydown', onKeyDownCloseModal);
//     onCloseModal();
//   }
// }

function onOpenModalMovie(e) {
   e.preventDefault();
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

  
          //    <button class=" class="btn-close"" type="button">
          //   <svg width="30px" height="30px" class="button-close__icon">
          //     <use href="images/symbol.svg#icon-close-button"></use>
          //   </svg>
          //  </button>
  let modalRenderHTML = basicLightbox.create(
    `    
        <div class="modal modal-container">
         <button type="button" class="btn-close">
           <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute"><path d="m8 8 14 14M8 22 22 8" stroke="#000" stroke-width="2"/></svg>
           </button>
                 <div class="modal-card">
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
                  <img class="button-modal__img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title} poster" loading="lazy" />
                 </picture>
            <div class="modal__about--movie">
                <h2 class="modal__about--title">${title}</h2>
                <p class="modal__about--title--movie">Vote / Votes <span class="modal__about--rating" data-digits-counter>${vote_average}</span><span
                        class="modal__about--title--movie-slech"> / </span> <span
                        class="modal__about--text--bleck" data-digits-counter>${vote_count}</span>
                        </p>
                <p class="modal__about--title--movie">Popularity<span
                        class="modal__about--text--popularity" data-digits-counter>${popularity}</span>
                <p class="modal__about--title--movie">Original Title<span class="modal__about--text--original--title">A
                        ${original_title}</span>
                <p class="modal__about--title--movie">Genre<span class="modal__about--text--genre">${genres}</span>
                </p>
                </p>
                <p class="about__movie--text">About</p>
                <p class="about__movie--text--content">${overview}</p>
                <ul class="list__btn--add">
                    <li class="watched-item"><button class="add__watched" data-id="${id}" type="button">add to Watched</button></li>
                    <li class="queue-item"><button class="add__queue" data-id="${id}" type="button">add to queue</button></li>
                </ul>
             </div>
          </div>
        </div>  
      </div>`,
    {
      onShow: modalRenderHTML => {
        modalRenderHTML.element().querySelector('.btn-close').onclick =
          modalRenderHTML.close;
      },
    }
  );
  modalRenderHTML.show();

  document
    .querySelector('body')
    .insertAdjacentHTML('beforeend', modalRenderHTML);
}
