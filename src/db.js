const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
dotenv.config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const DogModel = require("./models/dog.model");
const TemperamentModel = require("./models/temperament.model");
const DogTemperamentModel = require("./models/dogTemperament.model");

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    { logging: false, native: false }
);

DogModel(sequelize);
TemperamentModel(sequelize);
DogTemperamentModel(sequelize);

const { Dog } = sequelize.models;
const { Temperament } = sequelize.models;
const { DogTemperament } = sequelize.models;

module.exports = {
    Dog, Temperament, DogTemperament, conn: sequelize
};