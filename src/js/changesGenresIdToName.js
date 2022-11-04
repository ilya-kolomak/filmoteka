import ImageApiService from './mdApiService';

const imageApiService = new ImageApiService();

// export async function genres() {
//   const genresMovie = await imageApiService.getMovieGenres();
//   console.log(genres);
//   return genres;
// }

export async function changeGenresIdToName(movies) {
  try {
    // imageApiService.fetchGenres();
    const genersList = async function genres() {
      const genresMovie = await imageApiService.fetchGenres();
      console.log(genresMovie);
      return genres;
    };
    movies.forEach(element => {
      const array = element.genre_ids;
      console.log(array);
      if (!array) return 'Other';
      const newArr = array.map(elem => {
        if (genersList.find(x => x.id === elem)) {
          return genersList.find(x => x.id === elem).name;
        } else {
          return 'Other';
        }
      });
      element.genre_ids = newArr;
      console.log(element.genre_ids);
    });
  } catch (error) {}
}
