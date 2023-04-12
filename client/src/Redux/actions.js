import axios from "axios";
import Swal from "sweetalert2";

export const GET_POKEMONS = "GET_POKEMONS";
export const POKEMON_DETAIL = "POKEMON_DETAIL";
export const GET_TYPES = "GET_TYPES";
export const FILTER_TYPES = "FILTER_TYPES";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
 
export const getPokemons = () => {
    return async function (dispatch) {
        try{
            const apiPokemons = await axios.get("/pokemon")
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
            const response = await axios.get(`/pokemon/${id}`)
            return dispatch({ type: POKEMON_DETAIL, payload: response.data })

        } catch (error) {
            return alert("Im just using another Route to render this.")
        }
    };
};

export const getPokemonByName = (name) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`/pokemon?name=${name}`)
            return dispatch({ type: GET_POKEMON_BY_NAME, payload: response.data })
        } catch (error) {
            Swal.fire({
                title: `${name} does not exist`,
                text: "¡ Check the name is correct !",
                icon: "error",
                confirmButtonColor: 'rgb(230, 37, 37)',
                confirmButtonText: 'Try again',
            });
        }
    }
};

export const getTypes = () => {
    return async function(dispatch) {
        try {
            const apiTypes = await axios.get('/type');
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