const { Router } = require('express');
const pokemonRouter = require("./pokemonRouter");
const typeRouter = require("./typeRouter");

const router = Router();

router.use('/pokemon', pokemonRouter);
router.use('/type', typeRouter);

module.exports = router;
