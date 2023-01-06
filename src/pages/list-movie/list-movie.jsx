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
        if (pageCount <= 1) {
            setPageCount(1);
        } else {
            setPageCount((count) => --count);
        }
    };

    useEffect(() => {
        const fetchMovies = async () => {
            const movieArray = await movies(pageCount);
            setMovieList(movieArray.data);
        }

        fetchMovies(pageCount);
    }, [pageCount]);

    return (
        <div className={styles.listMovieContainer}>
            <div className={styles.topMovieContainer}>
                <TopMovieCard />
            </div>

            <div className={styles.listMoviesBox}>
                <h1>Movie List</h1>

                {/* remove the first movie since it is rendered in different component */}
                {movieList && movieList.slice(1).map((movie) => (
                    <MovieCard
                        id={movie.id}
                        key={movie.id}
                        title={movie.Series_Title}
                        genre={movie.Genre}
                        rating={movie.IMDB_Rating}
                        overview={movie.Overview}
                        img_link={movie.Poster_Link}
                        runtime={movie.Runtime}
                    />
                ))}

                <div className={styles.paginationButtonContainer}>
                    <button onClick={handlePrevPage}>{'<<'}</button>
                    <button onClick={handleNextPage}>{'>>'}</button>
                </div>
            </div>
        </div>
    )
}

export default ListMovie;