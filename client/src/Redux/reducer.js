import { 
    GET_POKEMONS, 
    POKEMON_DETAIL,
//     POKEMON_SEARCH,     
    GET_TYPES    
} from "./actions";

const initialState = {      //este es el estado global!!
    pokemons: [],
    pokemonDetail: [],
//     pokemonSearch: [],
    
    types: [],
};

const rootReducer = (state = initialState, action) => { // recibe el estado inicial y una action

    switch(action.type) { //aqui se va a evaluar el typo de action que recibe 

        case GET_POKEMONS:
            return {...state, pokemons:action.payload}

        case POKEMON_DETAIL:
            return {...state, pokemonDetail:action.payload}

//         case POKEMON_SEARCH:
//             return {...state, pokemonSearch:action.payload}//         

        case GET_TYPES:
            return {...state, types:action.payload}

         default: 
             return { ...state };
     }
};

export default rootReducer;