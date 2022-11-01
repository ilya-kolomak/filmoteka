export function loadedStoredData() {
    return {
        watchedMoviesIds: JSON.parse(localStorage.getItem('watched')),
        queueMoviesIds: JSON.parse(localStorage.getItem('queue')),
    }
}