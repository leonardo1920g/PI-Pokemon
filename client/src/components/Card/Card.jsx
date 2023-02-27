import { Link } from "react-router-dom";
import styles from "./Card.module.css"

const Card = (props) => {

    return (
        <div className={styles.Card}>
            <Link className={styles.link} to={`/detail/${props.id}`}>
            <h1 className={styles.na}>{props.name}</h1>            
            <img src={props.image}alt="not found" width="150px" heigth="150px" />
            <h3 className={styles.link}>Types:{props.types}</h3>
            </Link>
        </div>
    )
};

export default Card;