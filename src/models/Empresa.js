//Declaro sequelize
const sequelize = require("../db/db")
const { Model, DataTypes } = require("sequelize")

//Declaro la clase
class Empresa extends Model { }

//Creo las tablas
Empresa.init({
    //Creo atributo
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cif: {
        type: DataTypes.STRING(9),
        allowNull: false,
        unique: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: "empresa",
    timestamps: false,
})

module.exports = Empresa