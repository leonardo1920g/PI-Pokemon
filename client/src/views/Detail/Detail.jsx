import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { pokemonDetail } from "../../Redux/actions";

const Detail = () => {    

    const { id } = useParams();      
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.detail);
  
    useEffect(() => {
      dispatch(pokemonDetail(id));
    }, [dispatch, id]);
  
    return (
        <div>
            {Array.isArray(pokemon) && pokemon.length > 0 ?
            <div>
                <h1>{pokemon[0].name}</h1>
                <img 
                    src={pokemon[0].image} 
                    alt="not found"                       
                />
                <h2>Life: {pokemon[0].hp}</h2>
                <h2>Attack: {pokemon[0].attack}</h2>
                <h2>Defense: {pokemon[0].defense}</h2>
                <h2>Speed: {pokemon[0].speed}</h2>
                <h2>Height: {pokemon[0].height}</h2>
                <h2>Weight: {pokemon[0].weight}</h2>
                <h2>Types: {pokemon[0].types}</h2>
                
            </div>
            : <h1>LOADING...</h1>
            }
        </div>
    );
  };

export default Detail;

