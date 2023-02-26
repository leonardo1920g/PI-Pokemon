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
            {pokemon.name && pokemon.types ?
            <div>
                <h1>name: {pokemon[0].name}</h1>
            <h2>Life: {pokemon[0].hp}</h2>
            </div>
            : <p>Not found</p>
            }
        </div>
    );
  };

export default Detail;

