const clientesRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const clientesController = require("../../controllers/clientesController")
const middlewares = require("./middlewares/middlewares")


//Acciones de heroes llamando a los métodos de su controlador:
clientesRouter.get("/", clientesController.getAll)
clientesRouter.get("/:id", clientesController.getOne)
clientesRouter.post("/", middlewares.checkNewItem, clientesController.post)
clientesRouter.put("/:id", middlewares.checkEmpresaClient, clientesController.put)
clientesRouter.patch("/:id", middlewares.checkEmpresaClient, clientesController.patch)
clientesRouter.delete("/:id", middlewares.checkEmpresaClient, middlewares.checkEmpresaRol, clientesController.remove)

module.exports = clientesRouter