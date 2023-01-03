import styles from './top-movie.module.css';
import { movie } from '../../api/movies-api';
import { useEffect, useState } from 'react';

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

        </div>
    )
}

export default TopMovieCard;