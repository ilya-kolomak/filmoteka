import axios from 'axios';
const KEY = 'c94ed818fbf8fe0b53e7b4cc0b2e0092';
import { enableLoader, disableLoader } from './loader';

async function fetchTrendFilms(page) {
  const url = 'https://api.themoviedb.org/3/trending/movie/week';
  enableLoader();
  
  try {
    const { data } = await axios.get(`${url}?api_key=${KEY}&page=${page}`);
    disableLoader();  
    return data;
  } catch (error) {
    console.error('Something wrong! Can not get full trends' + error);
  }
}



//   fetchTrendFilms(1).then(data => console.log(data))

export { fetchTrendFilms };