const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define("DogTemperament", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        dogId: {
            type: DataTypes.INTEGER
        },
        temperamentId: {
            type: DataTypes.INTEGER
        },
    }, { timestamps: true });
}