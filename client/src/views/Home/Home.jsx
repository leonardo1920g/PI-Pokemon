import React, { useEffect } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { getPokemons, getTypes, } from "../../Redux/actions";
import styles from "./Home.module.css";

const Home = () => {
    
    const dispatch = useDispatch();
        
    useEffect(() => {   
        dispatch(clearPokemons());     
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