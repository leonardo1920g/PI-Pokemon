import { Link } from "react-router-dom";
import styles from "./Card.module.css"

const Card = (props) => {

    return (
        <div className={styles.Card}>
            <Link className={styles.link} to={`/detail/${props.id}`}>
                
            <div>            
                <h1 className={styles.name}>{props.name}</h1> 
            </div>

            <div className={styles.circle}></div>

            <div>          
                <img className={styles.image} src={props.image}alt="not found" width="150px" heigth="150px" />
            </div>

            <div>
                <h3 className={styles.types}>Types: {props.types}</h3>
            </div>

            </Link>            
        </div>
    )
};

export default Card;