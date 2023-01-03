import styles from './top-movie.module.css';
import { movie } from '../../api/movies-api';
import { useEffect, useState } from 'react';
import { truncate } from '../../utils/helper';

const TopMovieCard = () => {
    const [topMovie, setTopMovie] = useState({});

    useEffect(()=> {
        const fetchTopMovie = async (id) => {
            let rankOneMovie = await movie(id);
            setTopMovie(rankOneMovie.data)
        }

        let rankOne = 1
        fetchTopMovie(rankOne);
    }, []);

    return(
        <div className={styles.topMovieCard}>
            <div className={styles.leftContainer}>
                <h2>{topMovie.Series_Title}</h2>
                <br />
                <p>Rating: {topMovie.IMDB_Rating}/10</p>
                <p>Genre: {topMovie.Genre}</p>
                <p>Released Year: {topMovie.Released_Year}</p>
                <p>{truncate(topMovie.Overview, 100)}</p>
            </div>

            <div className={styles.rightContainer}>
                <img src={topMovie.Poster_Link} alt={topMovie.Series_Title}/>
            </div>
        </div>
    )
}

export default TopMovieCard;