import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css"

const NavBar = () => {    

    return (
        <div className={style.NavBar}>
            
            <Link to="/home">HOME</Link>
            <Link to="/create">CREATE</Link>
            <SearchBar/>
            
           
        </div>
    )
};

export default NavBar;