import Handlebars from 'handlebars';

Handlebars.registerHelper('yearFixed', function (movieDate) {
  let today = new Date(movieDate);
  let year = today.getFullYear();
  return year;
});
