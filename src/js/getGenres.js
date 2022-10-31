export function getGenresForModal(array) {
  let genre_names = '';

  if (!array) {
    return `Genre not found`;
  }

  for (const id of array) {
    const genre_name = localStorage.getItem(`genre_${id}`);
    if (!genre_name) {
      continue;
    }
    if (genre_names) {
      genre_names += ', ';
    }
    genre_names += genre_name;
  }
  return genre_names;
}

export function getGenresForCard(array) {
  let genre_names = '';

  if (!array) {
    return `Genre not found`;
  }

  if (array.length <= 2) {
    for (const id of array) {
      let genre_name = localStorage.getItem(`genre_${id}`);

      if (!genre_name) {
        continue;
      }

      if (genre_names) {
        genre_names += ', ';
      }

      genre_names += genre_name;
    }
    return genre_names;
  }

  if (array.length >= 3) {
    let counter = 0;

    for (const id of array) {
      let genre_name = localStorage.getItem(`genre_${id}`);

      if (!genre_name) {
        continue;
      }
      counter += 1;
      if (counter === 3) {
        genre_names += ', ' + 'others';
        break;
      }
      if (genre_names) {
        genre_names += ', ';
      }

      genre_names += genre_name;
    }
    return genre_names;
  }
}
