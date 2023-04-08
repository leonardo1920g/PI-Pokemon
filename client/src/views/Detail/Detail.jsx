import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearDetail, pokemonDetail } from "../../Redux/actions";
import styles from "./Detail.module.css"

const Detail = () => {    

    const { id } = useParams();      
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.detail);
     
    //console.log(pokemon[0]?.types);
    useEffect(() => {
        dispatch(clearDetail());
        dispatch(pokemonDetail(id));
    }, [dispatch, id]);
  
    let circleClass = '';
    if (pokemon[0]?.types === 'grass, poison') {
        circleClass = styles.circle1;
    } else if (pokemon[0]?.types === 'grass, psychic') {
        circleClass = styles.circle1;
    } else if (pokemon[0]?.types === 'grass') {
        circleClass = styles.circle1;    
    } else if (pokemon[0]?.types === 'poison') {
        circleClass = styles.circle2;
    } else if (pokemon[0]?.types === 'ground, poison') {
        circleClass = styles.circle2;
    } else if (pokemon[0]?.types === 'fire') {
        circleClass = styles.circle3;
    } else if (pokemon[0]?.types === 'fire, flying') {
        circleClass = styles.circle3;
    } else if (pokemon[0]?.types === 'water') {
        circleClass = styles.circle4;
    } else if (pokemon[0]?.types === 'fighting, water') {
        circleClass = styles.circle4;
    } else if (pokemon[0]?.types === 'poison, water') {
        circleClass = styles.circle4;
    } else if (pokemon[0]?.types === 'psychic, water') {
        circleClass = styles.circle4; 
    } else if (pokemon[0]?.types === 'ice, water') {
        circleClass = styles.circle4; 
    } else if (pokemon[0]?.types === 'flying, water') {
        circleClass = styles.circle4;  
    } else if (pokemon[0]?.types === 'bug') {
        circleClass = styles.circle5;
    } else if (pokemon[0]?.types === 'bug, grass') {
        circleClass = styles.circle5;
    } else if (pokemon[0]?.types === 'bug, flying') {
        circleClass = styles.circle5;
    } else if (pokemon[0]?.types === 'bug, poison') {
        circleClass = styles.circle2;      
    } else if (pokemon[0]?.types === 'normal') {
        circleClass = styles.circle6;
    } else if (pokemon[0]?.types === 'fighting') {
        circleClass = styles.circle7;
    } else if (pokemon[0]?.types === 'ground, rock') {
        circleClass = styles.circle8;
    } else if (pokemon[0]?.types === 'ground') {
        circleClass = styles.circle9;
    } else if (pokemon[0]?.types === 'flying, normal') {
        circleClass = styles.circle10;
    } else if (pokemon[0]?.types === 'fairy, normal') {
        circleClass = styles.circle11;
    } else if (pokemon[0]?.types === 'fairy') {
        circleClass = styles.circle11;
    } else if (pokemon[0]?.types === 'electric') {
        circleClass = styles.circle12;
    } else if (pokemon[0]?.types === 'electric, steel') {
        circleClass = styles.circle12;
    } else if (pokemon[0]?.types === 'electric, flying') {
        circleClass = styles.circle12;
    } else if (pokemon[0]?.types === 'psychic') {
        circleClass = styles.circle13;
    } else if (pokemon[0]?.types === 'fairy, psychic') {
        circleClass = styles.circle13;
    } else if (pokemon[0]?.types === 'ghost, poison') {
        circleClass = styles.circle13;
    } else if (pokemon[0]?.types === 'ice, psychic') {
        circleClass = styles.circle15;
    } else if (pokemon[0]?.types === 'flying, ice') {
        circleClass = styles.circle15;
    } else if (pokemon[0]?.types === 'rock, water') {
        circleClass = styles.circle16;
    } else if (pokemon[0]?.types === 'flying, rock') {
        circleClass = styles.circle16;
    } else if (pokemon[0]?.types === 'dragon') {
        circleClass = styles.circle17;
    } else if (pokemon[0]?.types === 'dragon, flying') {
        circleClass = styles.circle17;
    } else {
        circleClass = styles.circle;
    }

    return (
        <div className={styles.container}>
            {Array.isArray(pokemon) && pokemon.length > 0 ?
            <div className={styles.card}>

                <h1 className={styles.name}>{pokemon[0].name}</h1>

                <div> 
                <div className={styles.chart}>    
                <div className={circleClass}>             
                <img 
                    src={pokemon[0].image} 
                    alt="not found" 
                    className={styles.image}                      
                />
                </div>
                </div>
                </div>

                <form className={styles.form}>   

                    <label className={styles.text}>Types:</label>
                    <h2 className={styles.info}>{pokemon[0].types}</h2>                

                    <label className={styles.text}>Attack:</label>
                    <h2 className={styles.info}>{pokemon[0].attack}</h2>
                    
                    <label className={styles.text}>Defense:</label>
                    <h2 className={styles.info}>{pokemon[0].defense}</h2>

                    <label className={styles.text}>Speed:</label>
                    <h2 className={styles.info}>{pokemon[0].speed}</h2>

                </form>

            </div>
            : <p className={styles.loading}></p>
            }
        </div>
    );
  };

export default Detail;

