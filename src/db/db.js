const Sequelize = require("sequelize");

// Se crea una nueva instancia de Sequelize con los parámetros de conexión a la base de datos MySQL
const sequelize = new Sequelize("costrack_db", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

// Se exporta la instancia de Sequelize para su uso en otros módulos
module.exports = sequelize;
