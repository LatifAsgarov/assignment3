import styles from './list-movie.module.css';
import TopMovieCard from '../../components/top-movie/top-movie-card';

const ListMovie = () => {
    return(
        <div className={styles.listMovieContainer}>
            <div className={styles.topMovieContainer}>
                <TopMovieCard />
            </div>
        </div>
    )
}

export default ListMovie;