import { 
    GET_POKEMONS, 
    POKEMON_SEARCH,
    POKEMON_DETAIL,
    GET_TYPES    
} from "./actions";

const initialState = {      //este es el estado global!!
    pokemons: [],
    pokemonSearch: [],
    pokemonDetail: [],
    types: [],
};

const rootReducer = (state = initialState, action) => {

    switch(action.type) {

        case GET_POKEMONS:
            return {...state, pokemons:action.payload}

        case POKEMON_SEARCH:
            return {...state, pokemonSearch:action.payload}

        case POKEMON_DETAIL:
            return {...state, pokemonDetail:action.payload}

        case GET_TYPES:
            return {...state, types:action.payload}

        default: 
            return { ...state };
    }
};

export default rootReducer;