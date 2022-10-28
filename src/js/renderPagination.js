import createPagination from './pagination';

renderPaganation();

function renderPaganation() {
  try {
    const pagination = createPagination();
    pagination.on('afterMove', event => {
      const currentPage = event.page;
      console.log(currentPage);
      return currentPage;
    });
  } catch (error) {}
}
