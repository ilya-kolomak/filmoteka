import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/';
const API_KEY = '05e64fd21cd8a0d5400571b79e99a2f3';
export class MoмiesAPi {
  #page = 1;
  #totalPages = 0;

  async getPhotos() {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

    const data = await axios.get(url);
    return data;
  }

  incrementPage() {
    this.#page += 1;
  }
  dicrementPage() {
    this.#page -= 1;
  }

  resetPage() {
    this.#page = 1;
  }
}
