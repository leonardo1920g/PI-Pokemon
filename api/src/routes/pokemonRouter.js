const { Router } = require('express');
const {
    getPokemonsHandler,
    getPokemonHandler,
    createPokemonHandler,    
} = require("../handlers/pokemonHandler");

const pokemonRouter = Router();

pokemonRouter.get("/", getPokemonsHandler);

pokemonRouter.get("/:id", getPokemonHandler);

pokemonRouter.post("/", createPokemonHandler);

module.exports = pokemonRouter;