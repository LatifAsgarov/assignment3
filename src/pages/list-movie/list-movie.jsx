import styles from './list-movie.module.css';
import TopMovieCard from '../../components/top-movie/top-movie-card';
import MovieCard from '../../components/movie-card/movie-card';
import { movies } from '../../api/movies-api';
import { useEffect, useState } from 'react';

const ListMovie = () => {
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const movieArray = await movies();
            setMovieList(movieArray.data);
        }

        fetchMovies();
    }, []);

    return(
        <div className={styles.listMovieContainer}>
            <div className={styles.topMovieContainer}>
                <TopMovieCard />
            </div>

            <div className={styles.listMoviesBox}>
                {movieList && movieList.map((movie) => (
                    <MovieCard
                    key={movie.id}
                    genre={movie.Genre}
                    rating = {movie.IMDB_Rating}
                    overview = {movie.Overview}
                    img_link={movie.Poster_Link}
                    runtime = {movie.Runtime}
                    />
                ))}
                
            </div>
        </div>
    )
}

export default ListMovie;