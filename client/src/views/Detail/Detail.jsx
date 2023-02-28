import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { pokemonDetail } from "../../Redux/actions";
import styles from "./Detail.module.css"

const Detail = () => {    

    const { id } = useParams();      
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.detail);
  
    useEffect(() => {
      dispatch(pokemonDetail(id));
    }, [dispatch, id]);
  
    return (
        <div className={styles.container}>
            {Array.isArray(pokemon) && pokemon.length > 0 ?
            <div className={styles.card}>

                <h1 className={styles.name}>{pokemon[0].name}</h1>

                <div> 
                <div className={styles.chart}>    
                <div className={styles.circle}>             
                <img 
                    src={pokemon[0].image} 
                    alt="not found" 
                    className={styles.image}                      
                />
                </div>
                </div>
                </div>

                <form className={styles.form}>                   
                    
                    <label className={styles.text}>Life:</label>
                    <h2 className={styles.info}>{pokemon[0].hp}</h2>

                    <label className={styles.text}>Attack:</label>
                    <h2 className={styles.info}>{pokemon[0].attack}</h2>
                    
                    <label className={styles.text}>Defense:</label>
                    <h2 className={styles.info}>{pokemon[0].defense}</h2>

                    <label className={styles.text}>Speed:</label>
                    <h2 className={styles.info}>{pokemon[0].speed}</h2>

                    <label className={styles.text}>Height:</label>
                    <h2 className={styles.info}>{pokemon[0].height}</h2>

                    <label className={styles.text}>Weight:</label>
                    <h2 className={styles.info}>{pokemon[0].weight}</h2>

                    <label className={styles.text}>Types:</label>
                    <h2 className={styles.info}>{pokemon[0].types}</h2>
                </form>

            </div>
            : <h1>LOADING...</h1>
            }
        </div>
    );
  };

export default Detail;

