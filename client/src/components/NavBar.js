import { Link } from "react-router-dom";
import styles from "../styles/header.module.css"

 function NavBar() {
  return ( <><nav>
    <h1 className={styles.logo}>AK</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About us</Link>
      </li>
      <li>
      <Link to="/contact">Contact</Link>
      </li>
      
    </ul>
  </nav> </>);
}

export default NavBar;