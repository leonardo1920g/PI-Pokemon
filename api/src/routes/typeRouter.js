const { Router } = require("express");
const { getTypeHandler } = require("../handlers/typeHandler");

const typeRouter =Router();

typeRouter.get("/", getTypeHandler);

module.exports = typeRouter;