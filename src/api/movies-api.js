import { baseURL } from "./base-url";
import axios from 'axios'

export const movies = async (pageNumber) => {
    try {
        let movies = await axios.get(`${baseURL}/movies?_page=${pageNumber}&_limit=5`);
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
