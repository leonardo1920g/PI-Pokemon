import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { getPokemonByName } from "../../Redux/actions";
import styles from "./SearchBar.module.css";

const SearchBar = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handlerInputChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();                 
        dispatch(getPokemonByName(name));  
    }

    return (

        <div className={styles.searchBar}>
            <form onSubmit={handleSubmit}>
            <button className={styles.button} type="submit">
            SEARCH
            </button>            
            
            <input
            className={styles.input}
            type="text"
            placeholder="ENTER FULL NAME..."
            onChange={handlerInputChange}
            /> 
            </form>           
        </div>

    );
}

export default SearchBar