import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import Paginated from "../Paginated/Paginated";
import { filterCreated, filterTypes, orderByAttack, orderByName} from "../../Redux/actions";
import { useHistory } from "react-router-dom";

const CardsContainer = () => {    

    const dispatch = useDispatch();
    const pokemons = useSelector((state) => state.pokemons);
    const types = useSelector((state) => state.types);    
    const history = useHistory();

    const [page, setPage] = useState(1);
    const showPerPage = 12;
    const lastOnPage = page * showPerPage;
    const firstOnPage = lastOnPage - showPerPage;
    const shownPokemons = pokemons.slice(firstOnPage, lastOnPage);
  
    const paginate = (pageNumber) => {
      setPage(pageNumber);
    }; 
    

    const handlerFilterTypes = (event) => {
        dispatch(filterTypes(event.target.value));
        setPage(1);
        history.replace("/home")       
    };

    const handlerFilterCreated = (event) => {
        dispatch(filterCreated(event.target.value));
        setPage(1);   
        history.replace("/home")     
    };

    const handlerSort = (event) => {
        dispatch(orderByName(event.target.value));
        setPage(1); 
        history.replace("/home")       
    };

    const handlerAttack = (event) => {
        dispatch(orderByAttack(event.target.value));
        setPage(1); 
        history.replace("/home")       
    };
    
    return (       
        
        <div className={style.elements}>   

            {!pokemons.length > 0 && <p className={style.loading}></p>}        

            <select onChange={handlerSort} className={style.filter}>
                <option value="asc">ORDER A - Z</option>
                <option value="des">ORDER Z - A</option>
            </select>

            <select onChange={handlerAttack} className={style.filter}>
                <option value="strong">STRONG ATTACK</option>
                <option value="weak">WEAK ATTACK</option>
            </select>

            <select onChange={handlerFilterTypes} className={style.filter}>
                <option value="All" hidden>TYPES</option>
                        
                {types.length &&types.map((type) => (
                <option key={type.id} value={type.name}>
                  {type.name.charAt(0).toUpperCase() + type.name.substring(1)}
                </option>
            ))}
            </select>

            <select onChange={handlerFilterCreated} className={style.filter}>
                <option value="created">CREATED</option>
                <option value="existing">EXISTING</option>              
            </select>    
      
            <Paginated 
            showPerPage={showPerPage}
            pokemons={pokemons.length}
            paginate={paginate}
            page={page}
            />
            
            <div className={style.CardsContainer}>
                {shownPokemons.map(pokemon =>{
                    return (<Card
                    key={pokemon.id}
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image}
                    types={pokemon.types}
                    />
                    )
                })
                }
            </div>
        
        </div>
    );
};

export default CardsContainer;