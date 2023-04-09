import { Link } from "react-router-dom";
import styles from "./Card.module.css"

const Card = (props) => {

    let circleClass = '';
    if (props.types === 'grass, poison') {
        circleClass = styles.circle1;
    } else if (props.types === 'grass, psychic') {
        circleClass = styles.circle1;
    } else if (props.types === 'grass') {
        circleClass = styles.circle1;    
    } else if (props.types === 'poison') {
        circleClass = styles.circle2;
    } else if (props.types === 'ground, poison') {
        circleClass = styles.circle2;
    } else if (props.types === 'flying, poison') {
        circleClass = styles.circle2;   
    } else if (props.types === 'fire') {
        circleClass = styles.circle3;
    } else if (props.types === 'fire, flying') {
        circleClass = styles.circle3;
    } else if (props.types === 'water') {
        circleClass = styles.circle4;
    } else if (props.types === 'fighting, water') {
        circleClass = styles.circle4;
    } else if (props.types === 'poison, water') {
        circleClass = styles.circle4;
    } else if (props.types === 'psychic, water') {
        circleClass = styles.circle4; 
    } else if (props.types === 'ice, water') {
        circleClass = styles.circle4; 
    } else if (props.types === 'flying, water') {
        circleClass = styles.circle4;  
    } else if (props.types === 'bug') {
        circleClass = styles.circle5;
    } else if (props.types === 'bug, grass') {
        circleClass = styles.circle5;
    } else if (props.types === 'bug, flying') {
        circleClass = styles.circle5;
    } else if (props.types === 'bug, poison') {
        circleClass = styles.circle5;      
    } else if (props.types === 'normal') {
        circleClass = styles.circle6;
    } else if (props.types === 'fighting') {
        circleClass = styles.circle7;
    } else if (props.types === 'ground, rock') {
        circleClass = styles.circle8;
    } else if (props.types === 'ground') {
        circleClass = styles.circle9;
    } else if (props.types === 'flying, normal') {
        circleClass = styles.circle10;
    } else if (props.types === 'fairy, normal') {
        circleClass = styles.circle11;
    } else if (props.types === 'fairy') {
        circleClass = styles.circle11;
    } else if (props.types === 'electric') {
        circleClass = styles.circle12;
    } else if (props.types === 'electric, steel') {
        circleClass = styles.circle12;
    } else if (props.types === 'electric, flying') {
        circleClass = styles.circle12;
    } else if (props.types === 'psychic') {
        circleClass = styles.circle13;
    } else if (props.types === 'fairy, psychic') {
        circleClass = styles.circle13;
    } else if (props.types === 'ghost, poison') {
        circleClass = styles.circle13;
    } else if (props.types === 'ice, psychic') {
        circleClass = styles.circle15;
    } else if (props.types === 'flying, ice') {
        circleClass = styles.circle15;
    } else if (props.types === 'rock, water') {
        circleClass = styles.circle16;
    } else if (props.types === 'flying, rock') {
        circleClass = styles.circle16;
    } else if (props.types === 'dragon') {
        circleClass = styles.circle17;
    } else if (props.types === 'dragon, flying') {
        circleClass = styles.circle17;
    } else {
        circleClass = styles.circle;
    }

    return (
        <div className={styles.Card}>
            <Link className={styles.link} to={`/detail/${props.id}`}>
                
            <div>            
                <h1 className={styles.name}>{props.name}</h1> 
            </div>

            <div className={circleClass}></div>

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