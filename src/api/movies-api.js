import { baseURL } from "./base-url";
import axios from 'axios'

export const movies = async () => {
    try {
        let movies = await axios.get(`${baseURL}/movies`);
        return movies;
    } catch (error){
        return error.message
    }
}

export const movie = async (id) => {
    try {
        let topMovie = await axios.get(`${baseURL}/movies/${id}`)
        return topMovie;
    } catch (error) {
        return error.message
    }
}