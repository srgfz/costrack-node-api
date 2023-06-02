const comercialesRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const comercialesController = require("../../controllers/comercialesController")


//Acciones de heroes llamando a los métodos de su controlador:
comercialesRouter.get("/", comercialesController.getAll)
comercialesRouter.get("/:id", comercialesController.getOne)
comercialesRouter.post("/", comercialesController.post)
comercialesRouter.put("/:id", comercialesController.put)
comercialesRouter.patch("/:id", comercialesController.patch)
comercialesRouter.delete("/:id", comercialesController.remove)

module.exports = comercialesRouter