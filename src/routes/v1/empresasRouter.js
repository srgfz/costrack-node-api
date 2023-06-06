const empresasRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const empresasController = require("../../controllers/empresasController")

const middlewares = require("./middlewares/middlewares")


//Acciones de heroes llamando a los métodos de su controlador:
empresasRouter.get("/", empresasController.getAll)
empresasRouter.get("/:id", middlewares.checkEmployee, middlewares.checkEmpresaAndIdEmpresa, empresasController.getOne)
empresasRouter.get("/clientes/:id", middlewares.checkEmployee, middlewares.checkEmpresaAndIdEmpresa, empresasController.getClients)
empresasRouter.get("/articulos/:id", middlewares.checkEmployee, middlewares.checkEmpresaAndIdEmpresa, empresasController.getProducts)
empresasRouter.get("/comerciales/:id", middlewares.checkEmpresaRol, middlewares.checkId, empresasController.getCommercial)
empresasRouter.post("/", empresasController.post)
empresasRouter.put("/:id", middlewares.checkEmpresaRol, middlewares.checkId, empresasController.put)
empresasRouter.patch("/:id", middlewares.checkEmpresaRol, middlewares.checkId, empresasController.patch)
empresasRouter.delete("/:id", middlewares.checkEmpresaRol, middlewares.checkId, empresasController.remove)

module.exports = empresasRouter