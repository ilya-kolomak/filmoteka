import { genres } from './arrayGenres.json';

export function getGenders(genresId) {
  let movieGenres = genres.reduce((acc, { id, name }) => {
    if (genresId.includes(id)) {
      acc.push(name);
    }
    return acc;
  }, []);

  if (movieGenres.length > 3 || movieGenres.length === 0) {
    movieGenres = movieGenres.slice(0, 2);
    movieGenres.push('Other');
  }
  return movieGenres;
}
