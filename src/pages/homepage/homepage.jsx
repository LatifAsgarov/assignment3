import styles from './homepage.module.css';
import movieImage from '../../assets/movie.png'
import memberImage from '../../assets/member.png'

const Homepage = () => {
    return (
        <div className={styles.homepageContainer}>
            <div className={styles.header}>
                <div className={styles.partOne}>
                    <h2>Unlimited Movie, TVs Show, &amp; More</h2>
                    <h4>Watch everywhere.<br />Stream unlimited movies and TV shows <br /> on your phone, tablet, laptop, and TV without paying more.</h4>
                    <h6>Ready to watch? Check out most popular movies this week!</h6>
                </div>
                
                <img className={styles.imagePopcorn} src={movieImage} alt="movie.png" />
            </div>
            <section>
                <div className={styles.row}>
                    <h1>Our Team</h1>
                </div>
                <div className={styles.row}>
                    {/* Team Member 1 */}
                    <div className={styles.column}>
                        <div className={styles.card}>
                            <div className={styles.profile}>
                                <img src={memberImage} alt="team member" />
                            </div>
                            <h3>Jigme Tashi Namgyal</h3>
                            <p>Developer</p>
                            <p><a href="#" target="_blank">Yugen</a></p>
                            <p><a href="#" target="_blank">Cert-tainty</a></p>
                            <div className={styles.icons}>
                                <a href="https://www.linkedin.com/login" target="_blank" className={styles['social-icon']}><i className={`fa fa-brands fa-linkedin`} /></a>
                                <a href="https://github.com/jigmetnamgyal" target="_blank" className={styles['social-icon']}><i className={`fa fa-brands fa-github`} /></a>
                            </div>
                        </div>
                    </div>
                    {/* Team Member 2 */}
                    <div className={styles.column}>
                        <div className={styles.card}>
                            <div className={styles.profile}>
                                <img src={memberImage} alt="team member" />
                            </div>
                            <h3>Nargiz Bayramova</h3>
                            <p>Developer</p>
                            <p><a href="https://nrrggz.github.io/nbayramova.github.io/" target="_blank">Personal Webpage</a></p>
                            <p><a href="https://nrrggz.github.io/weather-app/" target="_blank">Weather Teller App</a></p>
                            <div className={styles.icons}>
                                <a href="https://www.linkedin.com/login" target="_blank" className={styles['social-icon']}><i className={`fa fa-brands fa-linkedin`} /></a>
                                <a href="https://github.com/nrrggz" target="_blank" className={styles['social-icon']}><i className={`fa fa-brands fa-github`} /></a>
                            </div>
                        </div>
                    </div>
                    {/* Team Member 3 */}
                    <div className={styles.column}>
                        <div className={styles.card}>
                            <div className={styles.profile}>
                                <img src={memberImage} alt="team member" />
                            </div>
                            <h3>Latif Asgarov</h3>
                            <p>Developer</p>
                            <p><a href="#" target="_blank">Personal Webpage</a></p>
                            <p><a href="https://github.com/LatifAsgarov/assignment2" target="_blank">Weather App</a></p>
                            <div className={styles.icons}>
                                <a href="https://www.linkedin.com/login" target="_blank" className={styles['social-icon']}><i className={`fa fa-brands fa-linkedin`} /></a>
                                <a href="https://github.com/LatifAsgarov" target="_blank" className={styles['social-icon']}><i className={`fa fa-brands fa-github`} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Homepage;