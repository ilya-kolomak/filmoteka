import * as basicLightbox from 'basiclightbox';
import ImageApiService from './mdApiService';

const imageApiService = new ImageApiService();

function createTrailerLink(el) {
  const trailerBtn = document.querySelectorAll('.btn-youtube-slider');

  trailerBtn.forEach(el =>
    el.addEventListener('click', e => {
      drawModalForTrailler(e.target.dataset.id);
    })
  );
}

function drawModalForTrailler(id) {
  imageApiService
    .fetchVideo(id)
    .then(data => {
      const id = data.results[0].key;
      const instance = basicLightbox.create(`
<iframe class="responsive" width="560" height="315" src='https://www.youtube.com/embed/${id}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`);

      instance.show();
      modalClBtTrailer(instance);
    })
    .catch(() => {
      const instance = basicLightbox.create(`
  <iframe class="responsive" width="560" height="315" src='http://www.youtube.com/embed/zwBpUdZ0lrQ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `);

      instance.show();
      modalClBtTrailer(instance);
    });
}
function modalClBtTrailer(instance) {
  const modalBox = document.querySelector('.basicLightbox--iframe');
  modalBox.insertAdjacentHTML(
    'afterbegin',
    `<button
        type="button"
        class="lightbox__button"
        data-action="close-lightbox"
        ></button>
    `
  );
  const modalCloseBtn = document.querySelector(
    '[data-action="close-lightbox"]'
  );
  modalCloseBtn.addEventListener('click', () => instance.close());
}

export default { createTrailerLink };
