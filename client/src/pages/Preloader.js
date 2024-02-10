import styles from '../styles/preloader.module.css'

const Preloader = () => {
    return (
        <div className={styles.preloader__body}>
        <div className={styles.hexagon }>
	<div className={styles.hexagon__group }>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
	</div>
	<div className={styles.hexagon__group }>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
	</div>
	<div className={styles.hexagon__group }>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
	</div>
	<div className={styles.hexagon__group }>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
	</div>
	<div className={styles.hexagon__group }>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
	</div>
	<div className={styles.hexagon__group }>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
		<div className={styles.hexagon__sector }></div>
	</div>
</div>
<p >Loading</p>
        </div>
    );
  };
  
  export default Preloader;