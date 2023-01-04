import styles from './movie.module.css';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { movie } from '../../api/movies-api';

const Movie = () => {
    const { movieId } = useParams();
    const [movieData, setMovieData] = useState({})

    useEffect(() => {
        async function fetchData() {
            const response = await movie(movieId)
            setMovieData(response.data)
        }
        fetchData();
    }, [movieId]);

    const ratings = Number(movieData.IMDB_Rating)
    const stars = []
    for (let i = 1; i <= 10; i++) {
        stars.push(<span className={i < ratings ? styles.checked : null} key={i + 'rspan'}><span className={'fa fa-star'} key={i + 'starspan'}></span></span>)
    }

    const overview = movieData.Certificate ? <div className={styles.certificate}>{movieData.Certificate}</div> : null

    return (
        <div className={styles.movieContainer}>
            <img className={styles.backgroundImg} src={movieData.Poster_Link} alt="poster" />
            <div className={styles.card}>
                <div className={styles.card_left}>
                    <img src={movieData.Poster_Link} alt="poster" />
                </div>
                <div className={styles.card_right}>
                    {overview}
                    <h1>{movieData.Series_Title}</h1>
                    <h3 className={styles.director}>by {movieData.Director}</h3>
                    <div className={styles.details}>
                        <div className={styles.sub_details}>
                            <span>{movieData.Released_Year}</span>
                            <span>{movieData.Runtime}</span>
                            <span>{movieData.Genre}</span>
                        </div>
                        <div className={styles.ratings}>
                            {stars}
                        </div>

                        <div className={styles.overview}>
                            {movieData.Overview}
                        </div>

                        <div className={styles.movieStars}>
                            <span>Stars: </span>
                            <span className={styles.movieStar}>{movieData.Star1}</span>&nbsp;
                            <span className={styles.movieStar}>{movieData.Star2}</span>&nbsp;
                            <span className={styles.movieStar}>{movieData.Star3}</span>&nbsp;
                            <span className={styles.movieStar}>{movieData.Star4}</span>
                        </div>

                        <p>Meta score: {movieData.Meta_score}</p>
                        <p>Number of votes: {movieData.No_of_Votes}</p>
                        <p>Gross: {movieData.Gross}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie;