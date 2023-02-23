import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import { useSelector } from "react-redux"

const CardsContainer = () => {

    // const pokemons = [
        
    //         {
    //             "id": 1,
    //             "name": "bulbasaur",
    //             "hp": 45,
    //             "attack": 49,
    //             "defense": 49,
    //             "speed": 45,
    //             "height": 7,
    //             "weight": 69,
    //             "types": [
    //                 "grass",
    //                 "poison"
    //             ],
    //             "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    //             "created": false
    //         },
    //         {
    //             "id": 2,
    //             "name": "ivysaur",
    //             "hp": 60,
    //             "attack": 62,
    //             "defense": 63,
    //             "speed": 60,
    //             "height": 10,
    //             "weight": 130,
    //             "types": [
    //                 "grass",
    //                 "poison"
    //             ],
    //             "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    //             "created": false
    //         },
    //         {
    //             "id": 3,
    //             "name": "venusaur",
    //             "hp": 80,
    //             "attack": 82,
    //             "defense": 83,
    //             "speed": 80,
    //             "height": 20,
    //             "weight": 1000,
    //             "types": [
    //                 "grass",
    //                 "poison"
    //             ],
    //             "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    //             "created": false
    //         },
    //         {
    //             "id": 4,
    //             "name": "charmander",
    //             "hp": 39,
    //             "attack": 52,
    //             "defense": 43,
    //             "speed": 65,
    //             "height": 6,
    //             "weight": 85,
    //             "types": [
    //                 "fire"
    //             ],
    //             "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    //             "created": false
    //         },
    //         {
    //             "id": 5,
    //             "name": "charmeleon",
    //             "hp": 58,
    //             "attack": 64,
    //             "defense": 58,
    //             "speed": 80,
    //             "height": 11,
    //             "weight": 190,
    //             "types": [
    //                 "fire"
    //             ],
    //             "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    //             "created": false
    //         },
    //         {
    //             "id": 6,
    //             "name": "charizard",
    //             "hp": 78,
    //             "attack": 84,
    //             "defense": 78,
    //             "speed": 100,
    //             "height": 17,
    //             "weight": 905,
    //             "types": [
    //                 "fire",
    //                 "flying"
    //             ],
    //             "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    //             "created": false
    //         },
    //         {
    //             "id": 7,
    //             "name": "squirtle",
    //             "hp": 44,
    //             "attack": 48,
    //             "defense": 65,
    //             "speed": 43,
    //             "height": 5,
    //             "weight": 90,
    //             "types": [
    //                 "water"
    //             ],
    //             "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    //             "created": false
    //         },
    //         {
    //             "id": 8,
    //             "name": "wartortle",
    //             "hp": 59,
    //             "attack": 63,
    //             "defense": 80,
    //             "speed": 58,
    //             "height": 10,
    //             "weight": 225,
    //             "types": [
    //                 "water"
    //             ],
    //             "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    //             "created": false
    //         },
    //         {
    //             "id": 9,
    //             "name": "blastoise",
    //             "hp": 79,
    //             "attack": 83,
    //             "defense": 100,
    //             "speed": 78,
    //             "height": 16,
    //             "weight": 855,
    //             "types": [
    //                 "water"
    //             ],
    //             "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    //             "created": false
    //         },
    //         {
    //             "id": 10,
    //             "name": "caterpie",
    //             "hp": 45,
    //             "attack": 30,
    //             "defense": 35,
    //             "speed": 45,
    //             "height": 3,
    //             "weight": 29,
    //             "types": [
    //                 "bug"
    //             ],
    //             "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    //             "created": false
    //         },
    //         {
    //             "id": 11,
    //             "name": "metapod",
    //             "hp": 50,
    //             "attack": 20,
    //             "defense": 55,
    //             "speed": 30,
    //             "height": 7,
    //             "weight": 99,
    //             "types": [
    //                 "bug"
    //             ],
    //             "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
    //             "created": false
    //         },
    //         {
    //             "id": 12,
    //             "name": "butterfree",
    //             "hp": 60,
    //             "attack": 45,
    //             "defense": 50,
    //             "speed": 70,
    //             "height": 11,
    //             "weight": 320,
    //             "types": [
    //                 "bug",
    //                 "flying"
    //             ],
    //             "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
    //             "created": false
    //         },
    //         {
    //             "id": 13,
    //             "name": "weedle",
    //             "hp": 40,
    //             "attack": 35,
    //             "defense": 30,
    //             "speed": 50,
    //             "height": 3,
    //             "weight": 32,
    //             "types": [
    //                 "bug",
    //                 "poison"
    //             ],
    //             "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
    //             "created": false
    //         },
    //         {
    //             "id": 14,
    //             "name": "kakuna",
    //             "hp": 45,
    //             "attack": 25,
    //             "defense": 50,
    //             "speed": 35,
    //             "height": 6,
    //             "weight": 100,
    //             "types": [
    //                 "bug",
    //                 "poison"
    //             ],
    //             "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
    //             "created": false
    //         },
    //         {
    //             "id": 15,
    //             "name": "beedrill",
    //             "hp": 65,
    //             "attack": 90,
    //             "defense": 40,
    //             "speed": 75,
    //             "height": 10,
    //             "weight": 295,
    //             "types": [
    //                 "bug",
    //                 "poison"
    //             ],
    //             "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
    //             "created": false
    //         },
    //         {
    //             "id": 16,
    //             "name": "pidgey",
    //             "hp": 40,
    //             "attack": 45,
    //             "defense": 40,
    //             "speed": 56,
    //             "height": 3,
    //             "weight": 18,
    //             "types": [
    //                 "normal",
    //                 "flying"
    //             ],
    //             "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
    //             "created": false
    //         },
    //         {
    //             "id": 17,
    //             "name": "pidgeotto",
    //             "hp": 63,
    //             "attack": 60,
    //             "defense": 55,
    //             "speed": 71,
    //             "height": 11,
    //             "weight": 300,
    //             "types": [
    //                 "normal",
    //                 "flying"
    //             ],
    //             "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    //             "created": false
    //         },

    // ]

    const pokemons = useSelector(state => state.pokemons)

    return (
        <div className={style.CardsContainer}>
            {pokemons.map(pokemon =>{
                return <Card
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image}
                    types={pokemon.types}
                />
            })}
        </div>
    );
};

export default CardsContainer;