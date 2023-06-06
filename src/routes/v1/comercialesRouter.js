const comercialesRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const comercialesController = require("../../controllers/comercialesController")

const middlewares = require("./middlewares/middlewares")


//Acciones de heroes llamando a los métodos de su controlador:
comercialesRouter.get("/", comercialesController.getAll)
comercialesRouter.get("/:id", middlewares.checkComercialAndIdComercial, middlewares.checkEmpresa, comercialesController.getOne)
comercialesRouter.get("/gastos/:id", middlewares.checkComercialAndIdComercial, middlewares.checkEmpresa, comercialesController.getBills)
comercialesRouter.get("/pedidos/:id", middlewares.checkComercialAndIdComercial, middlewares.checkEmpresa, comercialesController.getOrders)
comercialesRouter.post("/", middlewares.checkEmpresaRol, comercialesController.post)
comercialesRouter.put("/:id", middlewares.checkComercialAndIdComercial, middlewares.checkEmpresa, comercialesController.put)
comercialesRouter.patch("/:id", middlewares.checkComercialAndIdComercial, middlewares.checkEmpresa, comercialesController.patch)
comercialesRouter.delete("/:id", comercialesController.remove)

module.exports = comercialesRouter