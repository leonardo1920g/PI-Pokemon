import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { getPokemons } from "../../Redux/actions";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    },[dispatch]); 

    return(
        <>
        <h1> esta es la vista home</h1>
        <CardsContainer />
        </>
    )
};

export default Home;