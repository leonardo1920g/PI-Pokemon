import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../Redux/actions";
//import { Link } from "react-router-dom";

const Home = () => {

    const dispatch = useDispatch();
    //const allPokemons = useSelector((state) => state.pokemons)

    useEffect(() => {
        dispatch(getPokemons());
    },[dispatch]); 

    return(
        <>
        <h1>POKEMONS</h1>
        <CardsContainer />
        </>
    )
};

export default Home;