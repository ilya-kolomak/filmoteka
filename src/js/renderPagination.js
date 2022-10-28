import createPagination from './pagination';

renderPaganation();

function renderPaganation() {
  try {
    const pagination = createPagination();
    pagination.on('afterMove', event => {
      defineResultsPerPage();
      const currentPage = event.page;
      console.log(currentPage);
    });
  } catch (error) {}
}

function defineResultsPerPage() {
  const last = document.querySelector('.tui-next-is-ellip');
  const first = document.querySelector('.tui-prev-is-ellip');
  console.log(first);
  console.log(last);
  if (window.innerWidth < 768) {
    last.classList.add('hiden');
    first.classList.add('hiden');
  } else if (window.innerWidth > 768) {
    last.classList.remove('.hiden');
    first.classList.remove('.hiden');
  }
}

// function defineResultsPerPage() {
//   if (window.innerWidth >= 1024) {
//   } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
//   } else if (window.innerWidth < 768) {
//   }
// }
