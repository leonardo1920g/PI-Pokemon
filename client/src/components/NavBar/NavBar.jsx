import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css"

const NavBar = () => {    

    return (
        <div className={style.NavBar}>
            <Link to="/create">CREATED POKEMON</Link>
            <Link to="/home">POKEMONS</Link>            
            <SearchBar/>
            
           
        </div>
    )
};

export default NavBar;