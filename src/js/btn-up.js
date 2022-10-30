const toBtnTop = document.querySelector('.btn-up');

window.addEventListener('scroll', hideElOnScroll(toBtnTop));
toBtnTop.addEventListener('click', toPageTopOnClick);

function hideElOnScroll(el) {
  return function hideOnScroll(e) {
    if (pageYOffset < document.documentElement.clientHeight) {
      el.classList.add('visuallyhidden');
    } else {
      el.classList.remove('visuallyhidden');
    }
  };
}

function toPageTopOnClick(e) {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
