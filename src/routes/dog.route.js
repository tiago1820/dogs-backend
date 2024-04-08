const { Router } = require("express");
const dogRoute = Router();
const { DogController } = require("../controllers/dog.controller");

const dog = new DogController();
dogRoute.get("/dogs", dog.getAllBreeds);
dogRoute.get("/dogs/name/:breedName", dog.getBreedByName);
dogRoute.get("/dogs/:breedId", dog.getBreedById);
dogRoute.post("/dogs", dog.createBreed);

module.exports = dogRoute;