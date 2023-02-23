import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const POKEMON_DETAIL = "POKEMON_DETAIL";
// export const POKEMON_SEARCH = "POKEMON_SEARCH";
export const GET_TYPES = "GET_TYPES";

// action creator:
export const getPokemons = () => {
    return async function (dispatch) {

        const apiPokemons = await axios.get("http://localhost:3001/pokemon")
        const pokemons = apiPokemons.data;

        dispatch({ type: GET_POKEMONS, payload: pokemons })        
    };
};

export const pokemonDetail = (id) => {
    return async function (dispatch) {

        const apiPokemons = await axios.get(`http://localhost:3001/pokemon/${id}`)
        const pokemonDetail = apiPokemons.data;

        dispatch({ type: POKEMON_DETAIL, payload: pokemonDetail})        
    };
};

// export const pokemonSearch = (name) => {
//     return async function (dispatch) {

//         const apiPokemons = await axios.get(`http://localhost:3001/pokemon?name=${name}`)
//         const pokemonSearch = apiPokemons.data;

//         dispatch({ type: POKEMON_SEARCH, payload: pokemonSearch})        
//     };
// };



export const getTypes = () => {
    return async function (dispatch) {

        const apiPokemons = await axios.get("http://localhost:3001/type")
        const types = apiPokemons.data;

        dispatch({ type: GET_TYPES, payload: types})        
    };
};





// // };