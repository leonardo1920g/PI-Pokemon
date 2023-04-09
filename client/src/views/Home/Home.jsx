import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons, getTypes, } from "../../Redux/actions";
import styles from "./Home.module.css";

const Home = () => {
    
    const dispatch = useDispatch();
        
    useEffect(() => {
        dispatch(getPokemons());
        dispatch(getTypes());
    },[dispatch]); 

    return(
        <div>
            <div className={styles.home}>     
                <CardsContainer />        
            </div>
        </div>
    )
};

export default Home;