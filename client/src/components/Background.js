import styles from "../styles/background.module.css";
import moon from "../assets/moon2.png"

function Background() {
    return ( <>
        <div className={styles.background_container}>
            <img className={styles.moon} src={moon} alt=""/>
            <div className={styles.stars}></div>
            <div className={styles.twinkling}></div>
            <div className={styles.clouds}></div>
        </div>

    </> );
}

export default Background;