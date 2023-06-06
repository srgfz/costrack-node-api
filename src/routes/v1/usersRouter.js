const usersRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const usersController = require("../../controllers/usersController")
const middlewares = require("./middlewares/middlewares")



//Acciones de heroes llamando a los métodos de su controlador:
usersRouter.get("/", middlewares.checkToken, usersController.getAll)
usersRouter.get("/:id", middlewares.checkToken, middlewares.checkId, usersController.getOne)
usersRouter.get("/info/:email", middlewares.checkToken, middlewares.checkId, usersController.getInfo)
usersRouter.post("/login", usersController.login)
usersRouter.post("/register/empresa", usersController.postEmpresa)
usersRouter.post("/register/comercial", usersController.postComercial)
usersRouter.put("/:id", middlewares.checkToken, usersController.put)
usersRouter.patch("/:id", middlewares.checkToken, usersController.patch)
usersRouter.delete("/:id", middlewares.checkToken, usersController.remove)

module.exports = usersRouter