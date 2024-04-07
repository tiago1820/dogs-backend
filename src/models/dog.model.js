const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define("Dog", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        image: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        height: {
            type: DataTypes.INTEGER
        },
        weight: {
            type: DataTypes.INTEGER
        },
        lifeSpan: {
            type: DataTypes.INTEGER
        }
    }, { timestamps: true });
}