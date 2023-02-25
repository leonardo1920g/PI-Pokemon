import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons, getTypes, } from "../../Redux/actions";

const Home = () => {
    
    const dispatch = useDispatch();
    //const types = useSelector((state) => state.types);
    
    useEffect(() => {
        dispatch(getPokemons());
        dispatch(getTypes());
    },[dispatch]);     

    return(

        <div>           
            <h1>WELCOME POKEMON MASTER</h1>
            <CardsContainer />        
        </div>
    )
};

export default Home;