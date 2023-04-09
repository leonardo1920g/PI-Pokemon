import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getPokemonByName } from "../../Redux/actions";
import styles from "./SearchBar.module.css";
import Swal from "sweetalert2";

const SearchBar = () => {

    const dispatch = useDispatch();
    const errorName = useSelector((state) => state.nameError);
    const [name, setName] = useState("");

    const handlerInputChange = (event) => {
        setName(event.target.value)
    }

    const handlerSubmit = (event) => {
        event.preventDefault()              
        dispatch(getPokemonByName(name));                     
    }

    useEffect (() => {
        if (errorName){
            Swal.fire({
                title: `${name} does not exist`,
                text: "¡ Check the name is correct !",
                icon: "error",
                confirmButtonColor: 'rgb(230, 37, 37)',
                confirmButtonText: 'Try again',
            })
        }
    }, [errorName, name]);

    return (

        <div className={styles.searchBar}>
            <button
            className={styles.button}
            type="submit"
            onClick={handlerSubmit}
            >SEARCH</button>            
            
            <input
            className={styles.input}
            type="text"
            placeholder="ENTER FULL NAME..."
            onChange={handlerInputChange}
            />            
        </div>
    );
}

export default SearchBar