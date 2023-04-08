import { Link } from "react-router-dom";
import styles from "./Landing.module.css";


const Landing = () => {
    return (
        <div className={styles.landing}>
            <Link to={`/home`}>
                <button className={styles.button}>ENTER</button>
            </Link>            
        </div>
    )
};

export default Landing;