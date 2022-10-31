const refs = {
    loader: document.querySelector('.loader-wrapper')
}

export function enableLoader() {
    refs.loader.classList.remove('is-hidden');
}

export function disableLoader() {
    refs.loader.classList.add('is-hidden');
}