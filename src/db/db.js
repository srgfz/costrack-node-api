const Sequelize = require("sequelize")

const sequelize = new Sequelize("costrack_db", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = sequelize;