const { Pokemon, Type } = require("../db");
const axios = require('axios');
const { Op } = require("sequelize") 

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

    if (source === "bdd") {
        const databasePokemon = Pokemon.findByPk(id, {
            include: { model: Type, attributes: ["name"] },
        }); 
        return databasePokemon;
    };

    if (source === "api") {
        const pokemonRaw = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
        const apiPokemon = cleanArrayid(pokemonRaw);
        return apiPokemon;
    };       
};

const getAllPokemons = async () => {

    const databasePokemons = await Pokemon.findAll({include: {model: Type, attributes: ["name"]}});

    const api = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
    const response = api.data.results?.map(elemento => axios.get(elemento.url));
    const responseApi = await axios.all(response);
    const apiPokemons = cleanArray(responseApi);
    
    return [...databasePokemons, ...apiPokemons];
};

const searchPokemonByName = async (name) => {

    const nameSearch = name.trim().toLowerCase();
    const dataPokemon = await Pokemon.findAll({where: {name:{[Op.iLike]: name,}}})
    const databasePokemon = dataPokemon.map(pokemon => pokemon.dataValues.name)
    
    // const dataPokemon = await Pokemon.findAll({where: {name: nameSearch}, include: { model: Type, attributes: ["name"] }});
    // const databasePokemon = dataPokemon.map(pokemon => pokemon.dataValues)
   
    console.log(databasePokemon);

    const apiPokemonRaw = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameSearch}`)).data
    const apiPokemon = cleanArrayid(apiPokemonRaw);
    

    console.log(apiPokemon);

    //return [...dataPokemon, apiPokemon];    
    return databasePokemon
};
 
module.exports = { 
    createPokemon, 
    getPokemonById,
    getAllPokemons,
    searchPokemonByName
};


// .then(({data})=>({
    //     id: data.id,
    //     name: data.name,                 
    //     life: data.stats[0].base_stat,
    //     attack: data.stats[1].base_stat,
    //     defense: data.stats[2].base_stat,
    //     speed: data.stats[5].base_stat,
    //     height: data.height,
    //     weight: data.weight,
    //     types: data.types.map((t) => t.type.name),
    //     image: data.sprites.other["official-artwork"]['front_default'],
    //     created: false,
    // }))