//Declaro sequelize
const sequelize = require("../db/db")
const { Model, DataTypes } = require("sequelize")

//Declaro la clase
class PedidoLinea extends Model { }

//Creo las tablas
PedidoLinea.init({
    //Creo atributo
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
        }
    },
    precio_unidad: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: 0,
        }
    },
}, {
    sequelize,
    modelName: "pedido_linea",
    timestamps: false,
})

module.exports = PedidoLinea