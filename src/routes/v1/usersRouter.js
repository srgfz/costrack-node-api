const usersRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const usersController = require("../../controllers/usersController")
const middlewares = require("./middlewares/middlewares")



//Acciones de heroes llamando a los métodos de su controlador:
usersRouter.get("/", usersController.getAll)
usersRouter.get("/:id", middlewares.checkToken, usersController.getOne)
usersRouter.get("/info/:email", usersController.getInfo)
usersRouter.post("/login", usersController.login)
usersRouter.post("/register/empresa", usersController.postEmpresa)
usersRouter.post("/register/comercial", usersController.postComercial)
usersRouter.put("/:id", middlewares.checkToken, usersController.put)
usersRouter.patch("/:id", usersController.patch)
usersRouter.delete("/:id", usersController.remove)

module.exports = usersRouter