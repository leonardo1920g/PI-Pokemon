import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const POKEMON_DETAIL = "POKEMON_DETAIL";
export const GET_TYPES = "GET_TYPES";
export const FILTER_TYPES = "FILTER_TYPES";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const NAME_ERROR = "NAME_ERROR";
 
export const getPokemons = () => {
    return async function (dispatch) {
        try{
            const apiPokemons = await axios.get("http://localhost:3003/pokemon")
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
            const response = await axios.get(`http://localhost:3003/pokemon/${id}`)
            return dispatch({ type: POKEMON_DETAIL, payload: response.data })

        } catch (error) {
            return alert("Im just using another Route to render this.")
        }
    };
};

export const getPokemonByName = (name) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3003/pokemon?name=${name}`)
            return dispatch({ type: GET_POKEMON_BY_NAME, payload: response.data })
        } catch (error) {
            dispatch({ type: NAME_ERROR, payload: error });
        }
    }
};

export const getTypes = () => {
    return async function(dispatch) {
        try {
            const apiTypes = await axios.get('http://localhost:3003/type');
            const types = apiTypes.data;
  
            dispatch({ type: GET_TYPES, payload: types });
        } catch (error) {
            console.error('Something went wrong. Please try again.', error.message);
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

export const clearDetail = () => {
    return {
      type: CLEAR_DETAIL,
    };
}