import { Link } from "react-router-dom";
import style from "./NavBar.module.css"

const NavBar = () => {    

    return (
        <div className={style.NavBar}>
            <Link to="/home">HOME</Link>
            <Link to="/create">CREATE</Link>
        </div>
    )
};

export default NavBar;