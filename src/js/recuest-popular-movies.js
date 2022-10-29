

import axios from 'axios';

export class MoviesApi {
  async getMovies() {
    const url =
      ' https://api.themoviedb.org/3/trending/movie/week?api_key=05e64fd21cd8a0d5400571b79e99a2f3';

    const { data } = await axios.get(url);

    return data;
  }
}
