import React from "react";
import { Link, useHistory } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import logo from "../../Image/logo.png";
import { getPokemons } from "../../Redux/actions";
import { useDispatch } from "react-redux";


const NavBar = () => { 

    const dispatch = useDispatch();
    const history = useHistory();

    const resetCardContainer = async () => {        
        dispatch(getPokemons())
        history.push("/home");
    }

    return (
        <div className={style.NavBar}>
            <a href="/" className={style.image}>
            <img 
            src={logo}
            alt="init"
            width="100px"                        
            />
            </a>
            
            <Link className={style.link} onClick={resetCardContainer} to="/home">POKEMONS</Link>
            <Link className={style.link} to="/create">CREATE POKEMON</Link>
                        
            <SearchBar/>
        </div>
    )
};

export default NavBar;