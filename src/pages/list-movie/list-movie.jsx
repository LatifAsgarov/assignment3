import styles from './list-movie.module.css';
import TopMovieCard from '../../components/top-movie/top-movie-card';
import MovieCard from '../../components/movie-card/movie-card';
import { movies } from '../../api/movies-api';
import { useEffect, useState } from 'react';

const ListMovie = () => {
    const [pageCount, setPageCount] = useState(1);
    const [movieList, setMovieList] = useState([])

    const handleNextPage = (event) => {
        setPageCount((count) => ++count);
    };

    const handlePrevPage = (event) => {
        setPageCount((count) => --count);
    };

    useEffect(() => {
        const fetchMovies = async () => {
            const movieArray = await movies(pageCount);
            setMovieList(movieArray.data);
        }

        fetchMovies(pageCount);
    }, []);

    return(
        <div className={styles.listMovieContainer}>
            <div className={styles.topMovieContainer}>
                <TopMovieCard />
            </div>

            <div className={styles.listMoviesBox}>
                <h1>Movie List</h1>

                {movieList && movieList.map((movie) => (
                    <MovieCard
                    key={movie.id}
                    title = {movie.Series_Title}
                    genre={movie.Genre}
                    rating = {movie.IMDB_Rating}
                    overview = {movie.Overview}
                    img_link={movie.Poster_Link}
                    runtime = {movie.Runtime}
                    />
                ))}

                <div className={styles.paginationButtonContainer}>
                    <button>{'<<'}</button>
                    <button>{'>>'}</button>
                </div>
            </div>
        </div>
    )
}

export default ListMovie;