const gastosRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const gastosController = require("../../controllers/gastosController")


//Acciones de heroes llamando a los métodos de su controlador:
gastosRouter.get("/", gastosController.getAll)
gastosRouter.get("/:id", gastosController.getOne)
gastosRouter.post("/", gastosController.post)
gastosRouter.put("/:id", gastosController.put)
gastosRouter.patch("/:id", gastosController.patch)
gastosRouter.delete("/:id", gastosController.remove)

module.exports = gastosRouter