import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import logo from "../../Image/logo.png";


const NavBar = () => { 

    return (
        <div className={style.NavBar}>
            <a href="/" className={style.image}>
            <img 
            src={logo}
            alt="init"
            width="100px"                        
            />
            </a>
            
            <Link className={style.link} to="/home">POKEMONS</Link>
            <Link className={style.link} to="/create">CREATED POKEMON</Link>
                        
            <SearchBar/>
        </div>
    )
};

export default NavBar;