//Declaro sequelize
const sequelize = require("../db/db")
const { Model, DataTypes } = require("sequelize")

//Declaro la clase
class Articulo extends Model { }

//Creo las tablas
Articulo.init({
    //Creo atributo
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_emisor: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    precio_base: {
        type: DataTypes.FLOAT(11, 2),
        allowNull: false,
        validate: {
            min: 0,
        }
    },
    precio_coste: {
        type: DataTypes.FLOAT(11, 2),
        allowNull: false,
        validate: {
            min: 0,
        }
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
        }
    },
    descripcion: {
        type: DataTypes.TEXT('medium'),
        //allowNull: false
    },
}, {
    sequelize,
    modelName: "articulo",
    timestamps: false,
})

module.exports = Articulo