import style from "./Card.module.css"

const Card = (props) => {

    return (
        <div className={style.Card}>
            <h1>{props.name}</h1>
            <img src={props.image}alt="not found"/>
            <h3>Types:{props.types}</h3>
        </div>
    );
};

export default Card;