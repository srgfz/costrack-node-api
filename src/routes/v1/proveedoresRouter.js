const proveedoresRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const proveedoresController = require("../../controllers/proveedoresController")


//Acciones de heroes llamando a los métodos de su controlador:
proveedoresRouter.get("/", proveedoresController.getAll)
proveedoresRouter.get("/:id", proveedoresController.getOne)
proveedoresRouter.post("/", proveedoresController.post)
proveedoresRouter.put("/:id", proveedoresController.put)
proveedoresRouter.patch("/:id", proveedoresController.patch)
proveedoresRouter.delete("/:id", proveedoresController.remove)

module.exports = proveedoresRouter