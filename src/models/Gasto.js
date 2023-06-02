//Declaro sequelize
const sequelize = require("../db/db")
const { Model, DataTypes } = require("sequelize")

//Declaro la clase
class Gasto extends Model { }

//Creo las tablas
Gasto.init({
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
    cuantia: {
        type: DataTypes.FLOAT(11, 2),
        allowNull: false,
        validate: {
            min: 0,
        }
    },
    foto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    fecha_gasto: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,//Por defecto será el valor en el que se inserte el registro
        validate: {
            isBefore: DataTypes.NOW,   // only allow date strings before a specific date
        }
    },
    observaciones: {
        type: DataTypes.TEXT('medium'),
        //allowNull: false
    },
}, {
    sequelize,
    modelName: "gasto",
    timestamps: false,
})

module.exports = Gasto