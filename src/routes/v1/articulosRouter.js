const articulosRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const articulosController = require("../../controllers/articulosController")


//Acciones de heroes llamando a los métodos de su controlador:
articulosRouter.get("/", articulosController.getAll)
articulosRouter.get("/:id", articulosController.getOne)
articulosRouter.post("/", articulosController.post)
articulosRouter.put("/:id", articulosController.put)
articulosRouter.patch("/:id", articulosController.patch)
articulosRouter.delete("/:id", articulosController.remove)

module.exports = articulosRouter