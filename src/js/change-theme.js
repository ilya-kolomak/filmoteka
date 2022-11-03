const checkbox = document.querySelector('.input_checkbox');
checkbox.addEventListener('change', event => {
  //   event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  addDarkClassToHTML();
});

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      checkbox.checked = true;
      document.querySelector('body').classList.add('dark');
      document.querySelector('.material-icons').textContent = 'dark_mode';
    } else {
      document.querySelector('body').classList.remove('dark');
      document.querySelector('.material-icons').textContent = 'wb_sunny';
    }
  } catch (err) {}
}

addDarkClassToHTML();

// const checkbox = document.querySelector('.input_checkbox');
// const html = document.querySelector('html');

// checkbox.addEventListener('change', () => {
//   try {
//     if (checkbox.checked !== false) {
//       document.querySelector('body').classList.add('dark');
//       document.querySelector('.material-icons').textContent = 'dark_mode';
//     } else {
//       document.querySelector('body').classList.remove('dark');
//       document.querySelector('.material-icons').textContent = 'wb_sunny';
//     }
//   } catch (err) {}
// });
