const pedidosRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const pedidosController = require("../../controllers/pedidosController")
const middlewares = require("./middlewares/middlewares")


//Acciones de heroes llamando a los métodos de su controlador:
pedidosRouter.get("/", pedidosController.getAll)
pedidosRouter.get("/:id", pedidosController.getOne)
pedidosRouter.post("/", middlewares.checkComercialRol, pedidosController.post)
pedidosRouter.put("/:id", pedidosController.put)
pedidosRouter.patch("/:id", pedidosController.patch)
pedidosRouter.delete("/:id", pedidosController.remove)

module.exports = pedidosRouter