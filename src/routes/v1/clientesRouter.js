const clientesRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const clientesController = require("../../controllers/clientesController")


//Acciones de heroes llamando a los métodos de su controlador:
clientesRouter.get("/", clientesController.getAll)
clientesRouter.get("/:id", clientesController.getOne)
clientesRouter.post("/", clientesController.post)
clientesRouter.put("/:id", clientesController.put)
clientesRouter.patch("/:id", clientesController.patch)
clientesRouter.delete("/:id", clientesController.remove)

module.exports = clientesRouter