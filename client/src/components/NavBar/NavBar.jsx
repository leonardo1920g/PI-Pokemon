import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css"
import logo from "../../Image/logo.png"

const NavBar = () => {    

    return (
        <div className={style.NavBar}>
            
            <img 
            src={logo}
            alt="not found"
            width="100px"                        
            />
            
            <Link className={style.link} to="/create">CREATED POKEMON</Link>
            <Link className={style.link} to="/home">POKEMONS</Link>            
            <SearchBar />
        </div>
    )
};

export default NavBar;