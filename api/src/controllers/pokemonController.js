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
            types: Data.data.types.map((ele) => ele.type.name).flat().sort().join(", "),
            image: Data.data.sprites.other["official-artwork"]['front_default'],
            created: false,
        };
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
    name, image, attack, defense, speed, typeOne, typeTwo) => {

    const newPokemon = await Pokemon.create({ name, image, attack, defense, speed });
    const types = [typeOne, typeTwo === null || typeTwo === undefined ? "" : typeTwo];

    for (const type of types) {
        const eachType = await Type.findOne({
            where: { name: type }
        });

    await newPokemon.addType(eachType)
    }
    return newPokemon
};

const getPokemonById = async (id, source) => {

    if (source === "bdd") {        
        const database = await Pokemon.findByPk(id, {
          include: { model: Type, attributes: ["name"], as: "types", },
        }); 
        const databasePokemon = {
          ...database.toJSON(), 
          types: database.types.map((type) => type.name).flat().sort().join(", ")
        }
        return [databasePokemon];
    };    

    if (source === "api") {
        const pokemonRaw = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
        const apiPokemon = cleanArray1([pokemonRaw]);       
        return apiPokemon;
    };    
};

 const getAllPokemons = async () => {

        const database = await Pokemon.findAll({include: {model: Type, attributes: ["name"], as: "types"}});
        
        const databasePokemons = database.map((pokemon) => ({
                ...pokemon.toJSON(),
                types: pokemon.types.map((type) => type.name).flat().sort().join(", "),
              }));

        const api = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=120');
        const response = api.data.results?.map(elemento => axios.get(elemento.url));

        const responseApi = await axios.all(response);
        const apiPokemons = cleanArrayAll(responseApi);
        
        return [...databasePokemons, ...apiPokemons];
};

const searchNameDb = async (name) => {

    const nameSearch = name.trim().toLowerCase();
    const database = await Pokemon.findAll({where: { name: nameSearch },
        include: { model: Type, attributes: ["name"], as: "types", },});

    const dataPokemon = database.map((pokemon) => ({
        ...pokemon.toJSON(), types: pokemon.types.map((type) => type.name).flat().sort().join(", ")
    }))
    
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