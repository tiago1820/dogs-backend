const { Router } = require("express");
const apiRoute = Router();
const { APIController } = require("../controllers/api.controller");

const api = new APIController();
apiRoute.get("/", api.index);

module.exports = apiRoute;