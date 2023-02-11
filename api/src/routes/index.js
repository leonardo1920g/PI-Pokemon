const { Router } = require('express');
// Importar todos los routers;
const pokemonRouter = require("./pokemonRouter");
const typeRouter = require("./typeRouter");


const router = Router();

// Configurar los routers
router.use('/pokemon', pokemonRouter);
router.use('/type', typeRouter);


module.exports = router;
