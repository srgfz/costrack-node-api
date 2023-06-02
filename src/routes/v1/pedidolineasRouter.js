const pedidolineasRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const pedidolineasController = require("../../controllers/pedidolineasController")


//Acciones de heroes llamando a los métodos de su controlador:
pedidolineasRouter.get("/", pedidolineasController.getAll)
pedidolineasRouter.get("/:id", pedidolineasController.getOne)
pedidolineasRouter.post("/", pedidolineasController.post)
pedidolineasRouter.put("/:id", pedidolineasController.put)
pedidolineasRouter.patch("/:id", pedidolineasController.patch)
pedidolineasRouter.delete("/:id", pedidolineasController.remove)

module.exports = pedidolineasRouter