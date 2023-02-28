const { Pokemon, Type } = require("../db");
const axios = require('axios');

const cleanArrayAll = (arr) =>
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
            types: Data.data.types.map((ele) => ele.type.name),
            image: Data.data.sprites.other["official-artwork"]['front_default'],
            created: false,
        };
});

const cleanArray = (data) => ({
    id: data.id,
    name: data.name,
    hp: data.stats.find(stat => stat.stat.name === 'hp').base_stat,
    attack: data.stats.find(stat => stat.stat.name === 'attack').base_stat,
    defense: data.stats.find(stat => stat.stat.name === 'defense').base_stat,
    speed: data.stats.find(stat => stat.stat.name === 'speed').base_stat,
    height: data.height,
    weight: data.weight,
    types: data.types.map(type => type.type.name).sort().join(', '),
    image: data.sprites.other['official-artwork'].front_default,
    created: false,
  });

const cleanArray1 = (arr) =>
    arr.map((Data) => {   
        return {
            id: Data.id,
            name: Data.name,
            hp: Data.stats[0].base_stat,
            attack: Data.stats[1].base_stat,
            defense: Data.stats[2].base_stat,
            speed: Data.stats[5].base_stat,
            height: Data.height,
            weight: Data.weight,
            types: Data.types? Data.types.map((ele) => ele.type.name).flat().sort().join(", "): undefined,
            image: Data.sprites.other["official-artwork"]['front_default'],
            created: false,
        };
});

const createPokemon = async (
    name, image, hp, attack, defense, speed, height, weight, types) => {
    return await Pokemon.create({name, image, hp, attack, defense, speed, height, weight, types});
};

const getPokemonById = async (id, source) => {

    if (source === "bdd") {        
        const databasePokemon = await Pokemon.findByPk(id, {
            include: { model: Type, attributes: ["name"] },
        }); 
        return [databasePokemon];
    };

    if (source === "api") {
        const pokemonRaw = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
        const apiPokemon = cleanArray1([pokemonRaw]);       
        return apiPokemon;
    };    
};

const cache = new Map();

const getAllPokemons = async () => {
    const database = await Pokemon.findAll({
      include: { model: Type, attributes: ["name"] },
    });

    const databasePokemons = database.map((pokemon) => {
        return {
            ...pokemon.toJSON(),
       types: pokemon.types.map((type) => type.name),
        };
    });
  
    let apiPokemons = [];
    let endPoint = "https://pokeapi.co/api/v2/pokemon";
    let limit = "?limit=200"
    const cachedData = cache.get("apiPokemons");
    if (cachedData) {
      apiPokemons = cachedData;
    } else {
      let apiUrl = endPoint+limit;
      let apiResponse = await axios.get(apiUrl);
      let apiData = apiResponse.data;
  
      while (apiData.results.length) {
        let response = await axios.all(apiData.results.map(result => axios.get(result.url)));
        apiPokemons = [...apiPokemons, ...cleanArrayAll(response)];
        
        apiUrl = apiData.next;
        if (apiUrl) {
          apiResponse = await axios.get(apiUrl);
          apiData = apiResponse.data;
        } else {
          break;
        }
      }
  
      cache.set("apiPokemons", apiPokemons);
    }
  
    return [...databasePokemons, ...apiPokemons];
  };

// const getAllPokemons = async () => {

//     const databasePokemons = await Pokemon.findAll({include: {model: Type, attributes: ["name"]}});
    
//     const api = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=200');
//     const response = api.data.results?.map(elemento => axios.get(elemento.url));
//     const responseApi = await axios.all(response);
//     const apiPokemons = cleanArrayAll(responseApi);
    
//     return [...databasePokemons, ...apiPokemons];

// };



  
const searchNameDb = async (name) => {

    const nameSearch = name.trim().toLowerCase();
    const dataPokemon = await Pokemon.findAll({where: { name: nameSearch },
        include: { model: Type, attributes: ["name"] },});
    
    return dataPokemon
};

const searchNameApi = async (name) => {

    try {
        const pokemonRaw = (
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.trim().toLowerCase()}`)).data
            return await cleanArray1([pokemonRaw]);
            
        } catch(error) {
            return [];
        }
};

const searchPokemonByName = async (name) => {

    const pokeApi = await searchNameApi(name);
    const pokeDb = await searchNameDb(name);

    if(!pokeApi.length && !pokeDb.length)
    throw new Error(`THE POKEMON ${name} DOES NOT EXIST`);

    return [...pokeDb, ...pokeApi];
};
 
module.exports = { 
    createPokemon, 
    getPokemonById,
    getAllPokemons,
    searchPokemonByName
};