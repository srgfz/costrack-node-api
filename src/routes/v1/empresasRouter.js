const empresasRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const empresasController = require("../../controllers/empresasController")


//Acciones de heroes llamando a los métodos de su controlador:
empresasRouter.get("/", empresasController.getAll)
empresasRouter.get("/:id", empresasController.getOne)
empresasRouter.get("/clientes/:id", empresasController.getClients)
empresasRouter.get("/articulos/:id", empresasController.getProducts)
empresasRouter.post("/", empresasController.post)
empresasRouter.put("/:id", empresasController.put)
empresasRouter.patch("/:id", empresasController.patch)
empresasRouter.delete("/:id", empresasController.remove)

module.exports = empresasRouter