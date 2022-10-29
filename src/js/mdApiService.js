import axios from 'axios';
// const axios = require('axios').default;
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import 'notiflix/dist/notiflix-3.2.5.min.css';
// const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
// const API_KEY = '05e64fd21cd8a0d5400571b79e99a2f3';

export default class ImageApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    // this.per_page = 20;
  }
  async fetchImages() {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/week?api_key=38f6f2c88436f6a6fb5d137cfc7b2688'
      );
      this.page += 1;
      // console.log(response.data);
      return response.data;
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
