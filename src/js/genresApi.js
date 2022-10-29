import axios from 'axios';

export default class GenresApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  async fetchGenres() {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=38f6f2c88436f6a6fb5d137cfc7b2688&language=en-US'
      );
      // this.page += 1;
      console.log(response);
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
