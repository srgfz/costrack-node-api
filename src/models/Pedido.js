//Declaro sequelize
const sequelize = require("../db/db")
const { Model, DataTypes } = require("sequelize")

//Declaro la clase
class Pedido extends Model { }

//Creo las tablas
Pedido.init({
    //Creo atributo
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comentarios: {
        type: DataTypes.TEXT('medium'),
        //allowNull: false
    },
}, {
    sequelize,
    modelName: "pedido",
    timestamps: true,
})

module.exports = Pedido