import { getData } from "./recuest-popular-movies";
import { renderModal } from "./modalMovieMarkup";

async function movieListMarkup() {
    const list = document.createElement('ul');
    const { results } = await getData();
    results.forEach(movie => {
        const li = document.createElement('li')
        li.textContent = movie.title;
        li.addEventListener('click', () => {
            renderModal(movie);
        })
        list.appendChild(li)

    });
    console.log(results);
    document.querySelector('body').appendChild(list);
}

movieListMarkup()
