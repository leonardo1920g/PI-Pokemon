import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const POKEMON_DETAIL = "POKEMON_DETAIL";
export const GET_TYPES = "GET_TYPES";
export const FILTER_TYPES = "FILTER_TYPES";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";

// action creator:
export const getPokemons = () => {
    return async function (dispatch) {
        try{
            const apiPokemons = await axios.get("http://localhost:3001/pokemon")
            const pokemons = apiPokemons.data;

            dispatch({ type: GET_POKEMONS, payload: pokemons })

        } catch (error) {
            return console.log("Something went wrong. Please try again.", error.message)
        }
    };
};

export const pokemonDetail = (id) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/pokemon/${id}`)
            return dispatch({ type: POKEMON_DETAIL, payload: response.data })

        } catch (error) {
            return console.log("Im just using another Route to render this.")
        }
    };
};

export const getPokemonByName = (name) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/pokemon?name=${name}`)
            return dispatch({ type: GET_POKEMON_BY_NAME, payload: response.data })
        } catch (error) {
            return console.log("Not found", error.message)
        }
    }
};

export const getTypes = () => {
    return async function (dispatch) {
        try {
            const apiPokemons = await axios.get("http://localhost:3001/type")
            const types = apiPokemons.data;

             dispatch({ type: GET_TYPES, payload: types}) 
        } catch (error) {
            return console.log("Something went wrong. Please try again.", error.message)
        }       
    };
};

export const filterTypes = (payload) => {
    
    return {
        type: FILTER_TYPES, payload
      };
};

export const filterCreated = (payload) => {
    
    return {
        type: FILTER_CREATED, payload
      };
};

export const orderByName = (payload) => {

    return {
        type: ORDER_BY_NAME, payload
    };
};

export const orderByAttack = (payload) => {

    return {
        type: ORDER_BY_ATTACK, payload
    }
}