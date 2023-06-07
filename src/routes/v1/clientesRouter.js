const clientesRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const clientesController = require("../../controllers/clientesController")
const middlewares = require("./middlewares/middlewares")

/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Endpoints para gestionar los clientes
 */


/**
 * @swagger
 * /costrack/clientes:
 *   get:
 *     summary: Obtener todos los clientes
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Éxito, devuelve todos los clientes
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
 *                       nombre:
 *                         type: string
 *                       nombre_contacto:
 *                         type: string
 *                       email:
 *                         type: string 
 *                       telefono:
 *                         type: string 
 *                       direccion:
 *                         type: string 
 *                       createdAt:
 *                         type: string
 *                       updatedAt:
 *                         type: string
 *                       empresaId:
 *                         type: number 
 *       500:
 *         description: Error del servidor
 */
clientesRouter.get("/", clientesController.getAll)

/**
 * @swagger
 * /costrack/clientes/{id}:
 *   get:
 *     summary: Obtener un cliente por su ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del cliente a obtener
 *     responses:
 *       200:
 *         description: Éxito, devuelve el cliente solicitado
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
 *                     nombre:
 *                       type: string
 *                     nombre_contacto:
 *                       type: string
 *                     email:
 *                       type: string 
 *                     telefono:
 *                       type: string 
 *                     direccion:
 *                       type: string 
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *                     empresaId:
 *                       type: number 
 *       404:
 *         description: Cliente no encontrado
 *       500:
 *         description: Error del servidor
 */
clientesRouter.get("/:id", clientesController.getOne)

/**
 * @swagger
 * /costrack/clientes:
 *   post:
 *     summary: Crear un nuevo cliente
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               nombre_contacto:
 *                 type: string
 *               email:
 *                 type: string 
 *               telefono:
 *                 type: string 
 *               direccion:
 *                 type: string 
 *               createdAt:
 *                 type: string
 *               updatedAt:
 *                 type: string
 *               empresaId:
 *                 type: number 
 *     responses:
 *       200:
 *         description: Cliente creado con éxito
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
 *                     nombre:
 *                       type: string
 *                     nombre_contacto:
 *                       type: string
 *                     email:
 *                       type: string 
 *                     telefono:
 *                       type: string 
 *                     direccion:
 *                       type: string 
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *                     empresaId:
 *                       type: number 
 *       500:
 *         description: Error del servidor
 */
clientesRouter.post("/", middlewares.checkNewItem, clientesController.post)

/**
 * @swagger
 * /costrack/clientes/{id}:
 *   put:
 *     summary: Actualizar un cliente por su ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del cliente a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               nombre_contacto:
 *                 type: string
 *               email:
 *                 type: string 
 *               telefono:
 *                 type: string 
 *               direccion:
 *                 type: string 
 *               createdAt:
 *                 type: string
 *               updatedAt:
 *                 type: string
 *               empresaId:
 *                 type: number 
 *     responses:
 *       200:
 *         description: Cliente actualizado con éxito
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
 *       404:
 *         description: Cliente no encontrado
 *       500:
 *         description: Error del servidor
 */

clientesRouter.put("/:id", middlewares.checkEmpresaClient, clientesController.put)

/**
 * @swagger
 * /costrack/clientes/{id}:
 *   patch:
 *     summary: Actualizar parcialmente un cliente por su ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del cliente a actualizar parcialmente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               nombre_contacto:
 *                 type: string
 *               email:
 *                 type: string 
 *               telefono:
 *                 type: string 
 *               direccion:
 *                 type: string 
 *               createdAt:
 *                 type: string
 *               updatedAt:
 *                 type: string
 *               empresaId:
 *                 type: number 
 *     responses:
 *       200:
 *         description: Cliente actualizado parcialmente con éxito
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
 *       404:
 *         description: Cliente no encontrado
 *       500:
 *         description: Error del servidor
 */
clientesRouter.patch("/:id", middlewares.checkEmpresaClient, clientesController.patch)

/**
 * @swagger
 * /costrack/clientes/{id}:
 *   delete:
 *     summary: Eliminar un cliente por su ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del cliente a eliminar
 *     responses:
 *       200:
 *         description: Cliente eliminado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *       404:
 *         description: Cliente no encontrado
 *       500:
 *         description: Error del servidor
 */
clientesRouter.delete("/:id", middlewares.checkEmpresaClient, middlewares.checkEmpresaRol, clientesController.remove)

module.exports = clientesRouter