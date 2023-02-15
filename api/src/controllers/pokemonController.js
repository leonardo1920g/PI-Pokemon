const { Pokemon, Type } = require("../db");
const axios = require('axios');

const cleanArray = (arr) =>
    arr.map((Data) => {   
        return {
            id: Data.data.id,
            name: Data.data.name,
            hp: Data.data.stats[0].base_stat,
            attack: Data.data.stats[1].base_stat,
            defense: Data.data.stats[2].base_stat,
            speed: Data.data.stats[5].base_stat,
            height: Data.data.height,
            weight: Data.data.weight,
            types: Data.data.types.map((t) => t.type.name),
            image: Data.data.sprites.other["official-artwork"]['front_default'],
            created: false,
        };
});

const cleanArrayid = (pokemon) => {
    return {
        id: pokemon.id,
        name: pokemon.name,                 
        life: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        speed: pokemon.stats[5].base_stat,
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.types.map((t) => t.type.name),
        image: pokemon.sprites.other["official-artwork"]['front_default'],
        created: false,
    };
};

const createPokemon = async (
    name, image, hp, attack, defense, speed, height, weight) => {
    return await Pokemon.create({name, image, hp, attack, defense, speed, height, weight});
};

const getPokemonById = async (id, source) => {

    const pokemonRaw = source === "api" 
        ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
        : await Pokemon.findByPk(id, {
            include: { model: Type, attributes: ["name"] },
        });     
    const pokemon = cleanArrayid(pokemonRaw);
    return pokemon;
};

const getAllPokemons = async () => {

    const databasePokemons = await Pokemon.findAll();

    const api = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
    const response = api.data.results?.map(elemento => axios.get(elemento.url));
    const responseApi = await axios.all(response);
    const apiPokemons = cleanArray(responseApi);
    
    return [...databasePokemons, ...apiPokemons];
};

const searchPokemonByName = async (name) => {

    const nameSearch = name.trim().toLowerCase();
    const databasePokemon = await Pokemon.findAll({where: {name: nameSearch}});

    const apiPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameSearch}`)
        .then (({data}) =>({
            id: data.id,
            name: data.name,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            height: data.height,
            weight: data.weight,
            types: data.types.map((t) => t.type.name),
            image: data.sprites.other["official-artwork"]['front_default'],
            created: false,
        }));
    return [...databasePokemon, apiPokemon];
};
 
module.exports = { 
    createPokemon, 
    getPokemonById,
    getAllPokemons,
    searchPokemonByName
};

//const searchPokemonByName = async (name) => {
//     const Pokemons = await getAllPokemons();
//     const pokemonName = Pokemons.filter(e => e.name === name.trim().toLowerCase());
//     return pokemonName.length ? pokemonName[0] : "THE POKEMON DOES NOT EXIST";
// };