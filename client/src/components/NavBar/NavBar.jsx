import React from "react";
import { Link, useHistory } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import logo from "../../Image/logo.png";
import { clearPokemons, getPokemons } from "../../Redux/actions";
import { useDispatch } from "react-redux";


const NavBar = () => { 

    const dispatch = useDispatch();
    const history = useHistory();

    const resetCardContainer = async () => {    
        await dispatch(clearPokemons())  
        await dispatch(getPokemons())
        history.push("/home");
    }

    return (
        <div className={style.NavBar}>
            <Link to="/" className={style.image}>
            <img src={logo} alt="init" width="100px" />
            </Link>
            
            <Link className={style.link} onClick={resetCardContainer} to="/home">POKEMONS</Link>
            <Link className={style.link} to="/create">CREATE POKEMON</Link>
                        
            <SearchBar/>
        </div>
    )
};

export default NavBar;