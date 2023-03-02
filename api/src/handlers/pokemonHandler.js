const { 
    createPokemon,
    getPokemonById,
    getAllPokemons,
    searchPokemonByName
} = require("../controllers/pokemonController");
 
const getPokemonsHandler = async    (req, res) => {
    const { name } = req.query;

    try {
    const results = name ? await searchPokemonByName(name) : await getAllPokemons();
        res.status(200).json(results);
    } catch (error) {
        res.status(404).send({ error: error.message });
    };    
 };

const getPokemonHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id)? "bdd" : "api";

    try{
        const pokemon = await getPokemonById(id, source);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

const createPokemonHandler = async (req, res) => {
    const {name, image, hp, attack, defense, speed, height, weight, typeOne, typeTwo} = req.body;
    
    try {
        const newPokemon = await createPokemon(name, image, hp, attack, defense, speed, height, weight, typeOne, typeTwo);
        res.status(200).json({data: newPokemon, message: "POKEMON CREATED SUCCESSFULLY"});
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

module.exports = {
    getPokemonsHandler,
    getPokemonHandler,
    createPokemonHandler
};