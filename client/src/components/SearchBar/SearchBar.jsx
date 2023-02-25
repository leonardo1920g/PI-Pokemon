import { useState } from "react";
import { useDispatch } from "react-redux"
//import { useHistory } from "react-router-dom";
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
            >Search</button>

            <input
            type="text"
            placeholder="Search..."
            onChange={handlerInputChange}
            />
        </div>
    );

    // const history = useHistory();

    // const allPokemons = useSelector((state) => state.pokemons)
    
    // const handlerInputChange = (event) => {
    //     const { value } = event.target;
    //     setName(value);
    // };

    // const handlerSubmit = (event) => {
    //     event.preventDefault()
    //     let match = allPokemons.find(
    //         (p) => p.name.trim().toLowerCase() === name.trim().toLowerCase()
    //       );
    //       if (match) {
    //         dispatch(getPokemonByName(match.name));
    //         history.push(`/pokemons/${match.name}`);
    //         setName("");
    //       } else {
    //         alert("There's no Pokemons with that Name. Try again");
    //         setName("");
    //       }
    // };

    // return (
    //     <form onSubmit={handlerSubmit}>
    //         <input 
    //             type="text"
    //             id="search"
    //             placeholder="Search..."
    //             value={name}
    //             onChange={handlerInputChange}
    //         />
    //         <button 
    //         type="submit"
    //         onClick={() => setName("")}
    //         >Search
    //         </button>
    //     </form>
    // )
}

export default SearchBar