const { Type } = require("../db");
const axios = require("axios");

const getTypesApi = async () => {
    
    const typesApi = await axios.get("https://pokeapi.co/api/v2/type");
    return typesApi.data.results;    
};

const saveTypesDb = async (types) => {
    
    for (let i = 0; i < types.length; i++) {
        const type = types[i];
        await Type.findOrCreate({ where: { name: type.name } });
    };    
};

module.exports = { getTypesApi, saveTypesDb };