import Glide from '@glidejs/glide';
import * as basicLightbox from 'basiclightbox';
import ImageApiService from './mdApiService';
import cardsForSlider from '../templates/cardsForSlider.hbs';
import trailer from './trailer.js';

const imageApiService = new ImageApiService();
const sliderContainer = document.querySelector('.js-slider-container');

const glide = new Glide('.glide', {
  type: 'slider',
  startAt: 0,
  perView: 8,
  autoplay: 2000,
  hoverpause: true,
  bound: true,
});

glide.mount();
renderSliderFilms();

async function renderSliderFilms(results) {
  try {
    imageApiService.page = 2;
    const { results } = await imageApiService.fetchImages();
    const markup = cardsForSlider(results);
    sliderContainer.innerHTML = markup;
    const video = trailer.createTrailerLink(
      document.querySelectorAll('.btn-youtube-slider')
    );
    // console.log(video);
    return video;
  } catch (error) {}
}
