//Declaro sequelize
const sequelize = require("../db/db")
const { Model, DataTypes } = require("sequelize")

//Declaro la clase
class Comercial extends Model { }

//Creo las tablas
Comercial.init({
    //Creo atributo
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dni: {
        type: DataTypes.STRING(9),
        allowNull: false,
        unique: true,
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING,
        //allowNull: false
    },
}, {
    sequelize,
    modelName: "comercial",
    timestamps: false,
})

module.exports = Comercial