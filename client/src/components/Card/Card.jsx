import { Link } from "react-router-dom";
import style from "./Card.module.css"

const Card = (props) => {

    return (
        <div className={style.Card}>
            <Link to={`/pokemons/${props.id}`}>
            <h1>{props.name}</h1>
            </Link>
            <img src={props.image}alt="not found" width="200px" heigth="250px" />
            <h3>Types:{props.types}</h3>
        </div>
    )
};

export default Card;