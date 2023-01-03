import styles from './movie-card.module.css'
import { truncate } from '../../utils/helper';

const MovieCard = (props) => {
    return(
        <div className={styles.movieCardContainer}>
            <div className={styles.leftContainer}>
                <h2>{props.title}</h2>
                <br />
                <p>Rating: {props.rating}/10</p>
                <p>Genre: {props.genre}</p>
                <p>Runtime: {props.runtime}</p>
                <p>{truncate(props.overview, 100)}</p>
            </div>

            <div className={styles.rightContainer}>
                <img src={props.img_link} alt={props.title}/>
            </div>
        </div>
    )
}

export default MovieCard;