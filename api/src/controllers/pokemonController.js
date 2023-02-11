const { Pokemon, Type } = require("../db");
const axios = require('axios');

const cleanArray = (arr) => 
    arr.map((elem) => {

    return {

        id: elem.id,
        name: elem.name,
        image: elem.sprites.other["official-artwork"]['front_default'],
        life: elem.stats[0].base_stat,
        attack: elem.stats[1].base_stat,
        defense: elem.stats[2].base_stat,
        speed: elem.stats[5].base_stat,
        height: elem.height,
        weight: elem.weight,
        type: elem.types.map((t) => t.type.name),
        created: false,
    };
});

const createPokemon = async (
    name, image, life, attack, defense, speed, height, weight) => {
    return await Pokemon.create({name, image, life, attack, defense, speed, height, weight});
};

const getPokemonById = async (id, source) => {

    const pokemonRaw = source === "api" 
        ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
        .data
        : await Pokemon.findByPk(id, {
            include: {
                model: Type,
                attributes: ["name"],
            },
        }) ;
    
    const pokemon = cleanArray(pokemonRaw);

    return pokemon;
};

module.exports = { 
    createPokemon, 
    getPokemonById,
};