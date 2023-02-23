import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux"
import { useState } from "react";
import Paginated from "../Paginated/Paginated";


const CardsContainer = () => {

    //const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsForPage,setPokemonsForPage] = useState(12);
    const indexLastPokemon = currentPage * pokemonsForPage
    const indexFirstPokemon = indexLastPokemon - pokemonsForPage
    const currentPokemons = allPokemons.slice(indexFirstPokemon, indexLastPokemon);

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    
    //const pokemons = useSelector(state => state.pokemons)

    return (
        
        <form>
        <div>
            <select>
                <option value="upward">Upward</option>
                <option value="descending">Descending</option>
            </select>

            <select>
                <option>Types</option>
            </select>

            <select>
                <option value="created">Created</option>
                <option value="existing">Existing</option>
            </select>
        </div>

        <Paginated
        pokemonsForPage={pokemonsForPage}
        allPokemons={allPokemons.length}
        paginated={paginated}
        />

        <div className={style.CardsContainer}>
            {currentPokemons.map(pokemon =>{
                return <Card
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image}
                    types={pokemon.types}
                />
            })}
        </div>

        
        </form>
    );
};

export default CardsContainer;