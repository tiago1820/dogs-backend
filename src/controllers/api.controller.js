const axios = require("axios");
require("dotenv").config();

class APIController {

    index = async (req, res) => {
        let data = {};
        try {
            const response = await axios.get(`${process.env.API_BREEDS}?limit=5&page=0${process.env.API_KEY}`);
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
}

module.exports = { APIController };