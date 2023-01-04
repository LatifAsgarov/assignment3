import styles from './headers.module.css'
import { Link } from 'react-router-dom'
const Headers = (props) => {
    return (
        <nav className={styles.nav}>
            <i className={`${styles.uil} ${styles['uil-bars']} ${styles.navOpenBtn}`} />
            <Link to="/" className={styles.logo}>MovieRating</Link>
            <ul className={styles['nav-links']}>
                <i className={`${styles.uil} ${styles['uil-times']} ${styles.navCloseBtn}`} />
                <li><Link to="/">Home</Link></li>
                <li><Link to="/list-movies">Movies</Link></li>
                <li><Link to="/contact-us">Contact</Link></li>
            </ul>
            <i className={`${styles.uil} ${styles['uil-search']} ${styles['search-icon']}`} id="searchIcon" />
            <div className={styles['search-box']}>
                <i className={`${styles.uil} ${styles['uil-search']} ${styles['search-icon']}`} />
                <input type="text" placeholder="Search Here..." />
            </div>
        </nav>
    )
}

export default Headers;