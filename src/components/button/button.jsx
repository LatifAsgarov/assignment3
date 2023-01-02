import styles from './button.module.css'
import {Link} from 'react-router-dom';

const Button = (props) => {
    return(
        <div className={styles.button}>
            <Link className={styles.link} to={props.link}>
                <span>{props.name}</span>
            </Link>
        </div>
    )
}

export default Button;