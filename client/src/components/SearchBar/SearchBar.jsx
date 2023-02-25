import { useState } from "react";
import { useDispatch } from "react-redux"
import { getPokemonByName } from "../../Redux/actions";

const SearchBar = () => {

    const dispatch = useDispatch();

    // se crea el estado local 
    const [name, setName] = useState("");

    const handlerInputChange = (event) => {
        setName(event.target.value)
    }

    const handlerSubmit = (event) => {
        event.preventDefault()
        dispatch(getPokemonByName(name))
    }

    return (
        <div>
            <button
            type="submit"
            onClick={handlerSubmit}
            >SEARCH</button>

            <input
            type="text"
            placeholder="ENTER FULL NAME..."
            onChange={handlerInputChange}
            />
        </div>
    );
}

export default SearchBar