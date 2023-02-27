import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons, getTypes, } from "../../Redux/actions";
import styles from "./Home.module.css"

const Home = () => {
    
    const dispatch = useDispatch();
        
    useEffect(() => {
        dispatch(getPokemons());
        dispatch(getTypes());
    },[dispatch]);     

    return(

        <div className={styles.home}>           
            <h1 className={styles.text}>WELCOME POKEMON MASTER</h1>
            <CardsContainer />        
        </div>
    )
};

export default Home;