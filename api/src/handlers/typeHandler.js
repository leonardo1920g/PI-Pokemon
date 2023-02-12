const { getTypesApi, saveTypesDb } = require("../controllers/typeController")
const { Type } = require("../db");

const getTypesHandler = async (req, res) => {    

    try {
        const types = await getTypesApi();
        await saveTypesDb(types);

        const allTypes = await Type.findAll();
        return res.status(200).send(allTypes);

    } catch (error) {
        return res.status(400).json({ error: error.message });
    };
};

module.exports = { getTypesHandler };