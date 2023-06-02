//Declaro sequelize
const sequelize = require("../db/db")
const { Model, DataTypes } = require("sequelize")

//Declaro la clase
class Cliente extends Model { }

//Creo las tablas
Cliente.init({
    //Creo atributo
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    nombre_contacto: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: "cliente",
    timestamps: true,
})

module.exports = Cliente