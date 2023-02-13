const { Pokemon, Type } = require("../db");
const axios = require('axios');

const cleanArray = (arr) =>
    arr.map((info) => {   
        return {
            id: info.data.id,
            name: info.data.name,
            hp: info.data.stats[0].base_stat,
            attack: info.data.stats[1].base_stat,
            defense: info.data.stats[2].base_stat,
            speed: info.data.stats[5].base_stat,
            height: info.data.height,
            weight: info.data.weight,
            types: info.data.types.map((t) => t.type.name),
            image: info.data.sprites.other["official-artwork"]['front_default'],
            createdInDb: false,
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
    const Pokemons = await getAllPokemons();
    const pokemonName = Pokemons.filter(e => e.name === name.trim().toLowerCase());
    return pokemonName.length ? pokemonName[0] : "THE POKEMON DOES NOT EXIST";
};
 
module.exports = { 
    createPokemon, 
    getPokemonById,
    getAllPokemons,
    searchPokemonByName
};

    

    //const databasePokemon = await Pokemon.findAll({where: {name: name.trim().toLowerCase()}});

    // let pokemonRaw = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)) //${name.toLowerCase()}
    // .data
    
    //const pokemon = cleanArrayid(pokemonRaw);

    //console.log(pokemonRaw);

    // const pokemonsRequest = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
    // //me devuelve los pokemons traidos con un name y una url de cada pokemon
    // const pokemonsSubrequest = pokemonsRequest.data.results.map(obj => axios.get(obj.url));
    // //hago el axios pero a la sub url TERMINAR DE VER COMO FUNCIONA EL data.results.map
    // const infoUrlPokemons = await axios.all(pokemonsSubrequest);
    // //llama a todas las sub url, solicitudes simultaneas 
    // let pokemons = infoUrlPokemons.map(obj => obj.data);
    // //obtengo la data de cada pokemon por su suburl
    // let informacionPokemons = pokemons.map(pokemon => objPokeApi(pokemon))
    // //return informacionPokemons
    
    // then(() => {
    //     console.log("funciona");
    // })



    // let queryFromAPI =  {
    //       id: pokemonByNameAPI.data.id,
    //       name: pokemonByNameAPI.data.name,
    //       hp: pokemonByNameAPI.data.stats[0].base_stat,
    //       attack: pokemonByNameAPI.data.stats[1].base_stat,
    //       defense: pokemonByNameAPI.data.stats[2].base_stat,
    //       speed: pokemonByNameAPI.data.stats[5].base_stat,
    //       height: pokemonByNameAPI.data.height,
    //       weight: pokemonByNameAPI.data.weight,
    //       types: pokemonByNameAPI.data.types.map((t) => t.type.name),
    //       image: pokemonByNameAPI.data.sprites.other["official-artwork"]['front_default'],
    //       createdInDb: false,
    //   }

    

    //return [...databasePokemon, ...informacionPokemons]

//};








// const apiPokeUrl = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    // const results = apiPokeUrl.data;

    // const pokemonInfo = {
    //   id: results.id,
    //   name: results.name,
    //   hp: results.data.stats[0].base_stat,
    //   attack: results.data.stats[1].base_stat,
    //   defense: results.data.stats[2].base_stat,
    //   speed: results.data.stats[5].base_stat,
    //   height: results.height,
    //   weight: results.weight,
    //   types: results.types.map((t) => t.type.name),
    //   img: results.sprites.other["official-artwork"].front_default,
    //   create: false,
    // };  
    // const apiPokemonRaw = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`))
    //     .data.results;
        
    //     const pokemon = cleanArrayid(apiPokemonRaw);