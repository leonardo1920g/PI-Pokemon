import { 
    GET_POKEMONS, 
    POKEMON_DETAIL,    
    GET_TYPES,
    FILTER_TYPES,
    FILTER_CREATED, 
    ORDER_BY_NAME,
    ORDER_BY_ATTACK,
    GET_POKEMON_BY_NAME,
    CLEAR_DETAIL,
    NAME_ERROR, 
} from "./actions";

const initialState = {
    pokemons: [],
    allPokemons: [], 
    detail: [],
    types: [],
    nameError: null,
};

const rootReducer = (state = initialState, action) => { 
    
    switch(action.type) {

        case GET_POKEMONS:
            return {...state, pokemons: action.payload, allPokemons: action.payload }

        case POKEMON_DETAIL:
            return {...state, detail: action.payload}

        case GET_POKEMON_BY_NAME:
            return {...state, pokemons: action.payload} 

        case NAME_ERROR:
            return {...state, nameError: action.payload}
        
        case GET_TYPES:
            return {...state, types: action.payload}

        case FILTER_TYPES:  

            const allPokemons = state.allPokemons;
            let typesFiltered;
          
            if (action.payload === 'All') {
                typesFiltered = allPokemons;
            } else {
                typesFiltered = allPokemons.filter(pokemon => {
                const types = pokemon.types.split(", ");
            
                return types.map(type => type.toLowerCase()).includes(action.payload.toLowerCase());
                });
            }
          
            return { ...state, pokemons: typesFiltered }

        case FILTER_CREATED:

            const allPokemons1 = state.allPokemons;
            let createdFilter;

            if (action.payload === "created") {
                createdFilter = allPokemons1.filter((pokemon) => pokemon.created);
            } else if (action.payload === "existing") {
                createdFilter = allPokemons1.filter((pokemon) => !pokemon.created);
            }

            return { ...state, pokemons: createdFilter || allPokemons1 };

        case ORDER_BY_NAME:

        const pokemons = state.pokemons.slice(); // Copiar el arreglo original
        const isAscending = action.payload === 'asc'; // Verificar si la ordenación debe ser ascendente o descendente
        pokemons.sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          return isAscending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        });
        return {
          ...state,
          pokemons,
        }
        
        case ORDER_BY_ATTACK:

        const orderAttack = action.payload;
        let sortedPokemons;

        if (orderAttack === 'strong') {
            sortedPokemons = state.pokemons.slice().sort((a, b) => b.attack - a.attack);
        } else if (orderAttack === 'weak') {
            sortedPokemons = state.pokemons.slice().sort((a, b) => a.attack - b.attack);
        } else {
            return { ...state };
        }
            return { ...state, pokemons: sortedPokemons };

        case CLEAR_DETAIL:
                return {
                  ...state,
                  detail: "",
                };

            
        default: 
            return { ...state };
     }
};

export default rootReducer;