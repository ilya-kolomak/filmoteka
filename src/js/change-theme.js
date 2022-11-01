// document.querySelector('.input_checkbox').addEventListener('change', event => {
//   //   event.preventDefault();
//   if (localStorage.getItem('theme') === 'dark') {
//     localStorage.removeItem('theme');
//   } else {
//     localStorage.setItem('theme', 'dark');
//   }
//   addDarkClassToHTML();
// });

// function addDarkClassToHTML() {
//   try {
//     if (localStorage.getItem('theme') === 'dark') {
//       document.querySelector('html').classList.add('dark');
//       document.querySelector('.material-icons').textContent = 'dark_mode';
//     } else {
//       document.querySelector('html').classList.remove('dark');
//       document.querySelector('.material-icons').textContent = 'wb_sunny';
//     }
//   } catch (err) {}
// }

// addDarkClassToHTML();
const checkbox = document.querySelector('.input_checkbox');
console.log(checkbox);
checkbox.addEventListener('change', () => {
  try {
    if (checkbox.checked !== false) {
      document.querySelector('html').classList.add('dark');
      document.querySelector('.material-icons').textContent = 'dark_mode';
    } else {
      document.querySelector('html').classList.remove('dark');
      document.querySelector('.material-icons').textContent = 'wb_sunny';
    }
  } catch (err) {}
});
