const { 
    createPokemon,
    getPokemonById,
} = require("../controllers/pokemonController")
 
const getPokemonsHandler = (req, res) => {
    res.send("trae varios pokemons");
};

const getPokemonHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id)? "bdd" : "api";
    try{
        const pokemon = await getPokemonById(id, source);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).json({ error: error.menssage });
    };
};

const createPokemonHandler = async (req, res) => {
    const {name, image, life, attack, defense, speed, height, weight} = req.body;
    
    try {
        const newPokemon = await createPokemon(name, image, life, attack, defense, speed, height, weight);
        res.status(200).json({data: newPokemon, menssage: "POKEMON CREATED SUCCESSFULLY"}) 

    } catch (error) {
        res.status(400).json({ error: error.menssage });
    };
};

module.exports = {
    getPokemonsHandler,
    getPokemonHandler,
    createPokemonHandler,
};