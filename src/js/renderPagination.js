import createPagination from './pagination';

renderPaganation();
// localPagination();

function renderPaganation() {
  try {
    const pagination = createPagination();
    pagination.movePageTo(movies.page);
    pagination.on('afterMove', event => {
      const currentPage = event.page;
      // localStorage.setItem('pagination', currentPage);
      console.log(currentPage);
    });
  } catch (error) {}
}

// function localPagination() {
//   const savePagination = localStorage.getItem('pagination');
//   if (savePagination) {
//     console.log(savePagination);
//   }
// }
