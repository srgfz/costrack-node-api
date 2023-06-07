const usersRouter = require("express").Router();
const usersController = require("../../controllers/usersController");
const middlewares = require("./middlewares/middlewares");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints para gestionar los Usuarios, incluido el registro y el login.
 */

/**
 * @openapi
 * /costrack/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Éxito, devuelve la lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                       email:
 *                         type: string
 *                       rol:
 *                         type: integer
 *                         description: "será 0 si es comercial y 1 si es empresa"
 *                       createdAt:
 *                         type: string 
 *                       updatedAt:
 *                         type: string 
 */

usersRouter.get("/", middlewares.checkToken, usersController.getAll);

/**
 * @swagger
 * /costrack/users/{id}:
 *   get:
 *     summary: Obtener un usuario por su ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: ID del usuario a obtener
 *     responses:
 *       200:
 *         description: Éxito, devuelve el usuario solicitado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object 
 *                   properties:
 *                     id:
 *                       type: number
 *                     email:
 *                       type: string
 *                     rol:
 *                       type: integer
 *                       description: "será 0 si es comercial y 1 si es empresa"
 *                     createdAt:
 *                       type: string 
 *                     updatedAt:
 *                       type: string 
 *       404:
 *         description: Usuario no encontrado
 */

usersRouter.get("/:id", middlewares.checkToken, middlewares.checkId, usersController.getOne);

/**
 * @swagger
 * /costrack/users/info/{email}:
 *   get:
 *     summary: Obtener información de un usuario por su email
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: email
 *         schema:
 *           type: string
 *         required: true
 *         description: Email del usuario a obtener información
 *     responses:
 *       200:
 *         description: Éxito, devuelve la información del usuario solicitado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                     email:
 *                       type: string
 *                     rol:
 *                       type: integer
 *                       description: "será 0 si es comercial y 1 si es empresa"
 *                     createdAt:
 *                       type: string 
 *                     updatedAt:
 *                       type: string 
 *       404:
 *         description: Usuario no encontrado
 */

usersRouter.get("/info/:email", middlewares.checkToken, middlewares.checkId, usersController.getInfo);

/**
 * @swagger
 * /costrack/users/login:
 *   post:
 *     summary: Iniciar sesión de usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Éxito, devuelve el token de autenticación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *       401:
 *         description: Credenciales inválidas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 */

usersRouter.post("/login", usersController.login);

/**
 * @swagger
 * /costrack/users/register/empresa:
 *   post:
 *     summary: Registrar una empresa. Para este endpoint no hace falta token
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               rol:
 *                 type: integer
 *                 description: "será 0 si es comercial y 1 si es empresa"
 *               password:
 *                 type: string
 *               cif:
 *                 type: string
 *               nombre:
 *                 type: string
 *               direccion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Éxito, devuelve el token de autenticación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *       400:
 *         description: Datos de la empresa inválidos
 */

usersRouter.post("/register/empresa", middlewares.checkCifAndDni, usersController.postEmpresa);

/**
 * @swagger
 * /costrack/users/register/comercial:
 *   post:
 *     summary: Registrar un comercial. Para este endpoint hace falta un token con el rol de empresa, es decir, las empresas son las que registran a sus comerciales
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               rol:
 *                 type: integer
 *                 description: "será 0 si es comercial y 1 si es empresa"
 *               password:
 *                 type: string
 *               dni:
 *                 type: string
 *               nombre:
 *                 type: string
 *               apellidos:
 *                 type: string
 *               empresaId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Éxito, devuelve el token de autenticación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *       400:
 *         description: Datos del comercial inválidos
 */

usersRouter.post("/register/comercial", middlewares.checkCifAndDni, middlewares.checkEmpresaRol, middlewares.checkNewItem, usersController.postComercial);

/**
 * @swagger
 * /costrack/users/{id}:
 *   put:
 *     summary: Actualizar un usuario por su ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               rol:
 *                 type: integer
 *                 description: "será 0 si es comercial y 1 si es empresa"
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Éxito, devuelve los datos del usuario actualizado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *       400:
 *         description: Datos del usuario inválidos
 *       404:
 *         description: Usuario no encontrado
 */

usersRouter.put("/:id", middlewares.checkToken, usersController.put);

/**
 * @swagger
 * /costrack/users/{id}:
 *   patch:
 *     summary: Actualizar parcialmente un usuario por ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               rol:
 *                 type: integer
 *                 description: "será 0 si es comercial y 1 si es empresa"
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Éxito, devuelve los datos del usuario que han sido actualizados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *       400:
 *         description: Datos del usuario inválidos
 *       404:
 *         description: Usuario no encontrado
 */

usersRouter.patch("/:id", middlewares.checkToken, usersController.patch);

/**
 * @swagger
 * /costrack/users/{id}:
 *   delete:
 *     summary: Eliminar un usuario por su ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a eliminar
 *     responses:
 *       200:
 *         description: Éxito, devuelve un estado indicando si el borrado se ha realizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *       404:
 *         description: Usuario no encontrado
 */

usersRouter.delete("/:id", middlewares.checkToken, usersController.remove);

module.exports = usersRouter;
