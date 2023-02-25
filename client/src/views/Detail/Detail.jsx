import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { useParams } from "react-router-dom";
import { pokemonDetail } from "../../Redux/actions";

const Detail = (props) => {

    const dispatch = useDispatch();
    
  
    useEffect(() => {
      dispatch(pokemonDetail(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    const pokemon = useSelector((state) => state.detail);
  
    return (
      <div>
        <h1>name: {pokemon && pokemon.name}</h1>
        <h2>Life: {pokemon && pokemon.hp}</h2>
      </div>
    );

    // const { id } = useParams("");
    // console.log("id",id);

    
    // const dispatch = useDispatch();
    // const pokemon = useSelector((state) => state.detail.payload);
  
    // useEffect(() => {
    //   dispatch(pokemonDetail(id));
    // }, [dispatch, id]);
  
    // return (
    //   <div>
    //     <h1>name: {pokemon && pokemon.name}</h1>
    //     <h2>Life: {pokemon && pokemon.hp}</h2>
    //   </div>
    // );
  };

export default Detail;

