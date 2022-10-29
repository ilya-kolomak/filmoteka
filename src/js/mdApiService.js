import axios from 'axios';

export default class ImageApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
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
