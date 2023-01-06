import styles from './movie-card.module.css'
import { truncate } from '../../utils/helper';
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
    return (
        <Link to={`/movies/${props.id}`} className={styles.movieCardContainer}>
            <div className={styles.leftContainer}>
                <h3>{props.title}</h3>
                <br />
                <p>Rating: {props.rating}/10</p>
                <p>Genre: {props.genre}</p>
                <p>Runtime: {props.runtime}</p>
                <p>{truncate(props.overview, 100)}</p>
            </div>

            <div className={styles.rightContainer}>
                <img src={props.img_link} alt={props.title} />
            </div>
        </Link>
    )
}

export default MovieCard;