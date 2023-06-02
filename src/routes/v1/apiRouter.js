const apirouter = require("express").Router();

const usersRouter = require("./usersRouter")
const gastosRouter = require("./gastosRouter")
const comercialesRouter = require("./comercialesRouter")
const empresasRouter = require("./empresasRouter")
const pedidosRouter = require("./pedidosRouter")
const clientesRouter = require("./clientesRouter")
const pedidolineasRouter = require("./pedidolineasRouter")
const articulosRouter = require("./articulosRouter")
const proveedoresRouter = require("./proveedoresRouter")

const middlewares = require("./middlewares/middlewares")


apirouter.use("/users", usersRouter)
apirouter.use("/gastos", middlewares.checkToken, gastosRouter)
apirouter.use("/comerciales", middlewares.checkToken, comercialesRouter)
apirouter.use("/empresas", middlewares.checkToken, empresasRouter)
apirouter.use("/pedidos", middlewares.checkToken, pedidosRouter)
apirouter.use("/clientes", middlewares.checkToken, clientesRouter)
apirouter.use("/lineasPedido", middlewares.checkToken, pedidolineasRouter)
apirouter.use("/articulos", middlewares.checkToken, articulosRouter)
apirouter.use("/proveedores", middlewares.checkToken, proveedoresRouter)


module.exports = apirouter;