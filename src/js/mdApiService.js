import axios from 'axios';
const API_KEY = '38f6f2c88436f6a6fb5d137cfc7b2688';
const BASE_URL = 'api.themoviedb.org/3/';
export default class ImageApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  async fetchImages() {
    try {
      const response = await axios.get(
        `https://${BASE_URL}trending/movie/week?api_key=${API_KEY}&page=${this.page}`
      );
      return response.data;
    } catch (error) {
      console.log('error in fetchImages', error);
    }
  }

  async fetchImagesByQuery() {
    try {
      const respons = await axios.get(
        `https:/${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=${this.page}&include_adult=false&query=${this.searchQuery}`
      );
      return respons.data;
    } catch (error) {}
  }

  async fetchGenres() {
    try {
      const response = await axios.get(
        `https://${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      console.log(response);
      return response.genres;
    } catch (error) {}
  }
  async fetchVideo(id) {
    try {
      const response = await axios.get(
        `https://${BASE_URL}movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      );
      return response.genres;
    } catch (error) {}
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
