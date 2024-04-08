const axios = require("axios");
require("dotenv").config();

class DogController {

    getAllBreeds = async (req, res) => {
        let data = {};
        try {
            const response = await axios.get(`${process.env.API_BREEDS}?limit=5&page=0&${process.env.API_KEY}`);
            const breeds = response.data;
            const count = breeds.length;
            data = { count, breeds };
            res.status(200).json(data);
        } catch (error) {
            console.log("AQUI: ", error);
            data = { error: "Error" }
            return res.status(500).json(data);
        }
    }

    getBreedById = async (req, res) => {
        let data = {};
        try {
            const breedId = req.params.breedId;
            const response = await axios.get(`${process.env.API_BREEDS}/${breedId}&${process.env.API_KEY}`);
            const breed = response.data;
            data = { breed };
            res.status(200).json(data);
        } catch (error) {
            console.log("AQUI: ", error);
            data = { error: "Error" }
            return res.status(500).json(data);
        }
    }

    getBreedByName = async (req, res) => {
        let data = {};
        try {
            const breedName = req.params.breedName
            console.log(`${process.env.API_BREEDS}/search?q=${breedName}&${process.env.API_KEY}`);
            const response = await axios.get(`${process.env.API_BREEDS}/search?q=${breedName}&${process.env.API_KEY}`);
            const breed = response.data;
            data = { breed };
            return res.status(200).json(data);
        } catch (error) {
            console.log("AQUI: ", error);
            data = { error: "Error" }
            return res.status(500).json(data);
        }
    }

    createBreed = async (req, res) => {
        console.log("OPA: ", req.body);
        let data = {};
        try {
            const { name, weight, height, lifeSpan } = req.body;
            // let existBreed = busqueda en la api y en la basedatos
        } catch (error) {
            console.log("HOLA!: ", error);
            data = { error: "Error interno del servidor." };
            return res.status(500).json(data);
        }

    }
}

module.exports = { DogController };