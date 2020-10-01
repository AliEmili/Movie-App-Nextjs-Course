import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const MOVIE_DATA = []

const CATEGORY_DATA = [
    { id: '1', name: 'drama' },
    { id: '2', name: 'action' },
    { id: '3', name: 'adventure' },
    { id: '4', name: 'historical' },
]



export const getMovies = () => {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(MOVIE_DATA);
    //         reject('cannot fetch data!');
    //     }, 2000);
    // })
    return axios.get(`${BASE_URL}/api/v1/movies`).then((res) => {
        return res.data;
    });
}

export const createMovie = (movie) => {

    return new Promise((resolve, reject) => {

        movie.id = Math.random().toString(36).substr(2, 7);

        setTimeout(() => {
            MOVIE_DATA.push(movie);
            resolve(MOVIE_DATA);
            // reject('cannot fetch data!');
        }, 2000);
    })

}

export const getMovieById = (id) => {

    return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data);
    // return new Promise((resolve, reject) => {
    //     const movieIndex = MOVIE_DATA.findIndex((movie) => {
    //         return movie.id === id;
    //     })
    //     const movie = MOVIE_DATA[movieIndex];
    //     setTimeout(() => {
    //         resolve(movie);
    //     }, 50);
    // })
}

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(CATEGORY_DATA);
            reject('cannot fetch categories');
        }, 50)
    })
}