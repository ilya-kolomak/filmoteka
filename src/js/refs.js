export const refs = {
  form: document.querySelector('.js-search-form'),
  searchBtn: document.querySelector('.js-search-btn'),
  btnOnModalTeam: document.querySelector('.team-link'),
  modalBackdrop: document.querySelector('.modal-backdrop'),
  photosContainer: document.querySelector('.js-photos-container'),
  isLibraryPage: document.querySelector('.library-section'),
  nothingWatch: document.querySelector('.js-not-film'),

  // Modal btns;
  btnAddToWatched: document.querySelector('.add__watched'),
  btnAddToQueue: document.querySelector('.add__queue'),

  closeModalBtn: document.querySelector('.btn-close'),

  libraryWatched: document.querySelector('#watched'),
  libraryQueue: document.querySelector('#queue'),

  //modal-card
  modalCardBackdrop: document.querySelector('.modal-card-backdrop'),
  modalCardContainer: document.querySelector('.movie__container'),
};

export const { btnOnModalTeam, modalBackdrop } = refs;
console.log(refs.isLibraryPage);
