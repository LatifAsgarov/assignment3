import Button from '../../components/button/button';
import styles from './homepage.module.css';

const Homepage = () => {
    return(
        <div className={styles.homepageContainer}>
            Homepage
            <Button link="/contact-us" name="Contact Us" />
        </div>
    )
}

export default Homepage;