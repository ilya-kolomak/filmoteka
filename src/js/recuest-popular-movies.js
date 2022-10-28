const url =
  ' https://api.themoviedb.org/3/trending/movie/week?api_key=05e64fd21cd8a0d5400571b79e99a2f3';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);

    // Data handling
  })
  .catch(error => {
    // Error handling
  });
