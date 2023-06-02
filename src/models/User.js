const sequelize = require("../db/db")
const { Model, DataTypes } = require("sequelize");

class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,//Por defecto será 0 (usuario común)
        validate: {
            min: 0,
            max: 1
        }
    },
},
    {
        sequelize,
        modelName: "user",
        timestamps: true,
    });

module.exports = User;
