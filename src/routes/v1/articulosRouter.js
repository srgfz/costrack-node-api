const articulosRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const articulosController = require("../../controllers/articulosController")

/**
 * @swagger
 * tags:
 *   name: Artículos
 *   description: Endpoints para gestionar los artículos
 */


/**
 * @swagger
 * /costrack/articulos:
 *   get:
 *     summary: Obtener todos los artículos
 *     tags: [Artículos]
 *     responses:
 *       200:
 *         description: Éxito, devuelve todos los artículos
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
 *                         type: integer
 *                       nombre:
 *                         type: string
 *                       precio_base:
 *                         type: number 
 *                       precio_coste:
 *                         type: number 
 *                       stock:
 *                         type: number 
 *                       descripcion:
 *                         type: string
 *                       proveedorId:
 *                         type: number 
 *                       empresaId:
 *                         type: number
 *       500:
 *         description: Error del servidor
 */

articulosRouter.get("/", articulosController.getAll)

/**
 * @swagger
 * /costrack/articulos/{id}:
 *   get:
 *     summary: Obtener un artículo por su ID
 *     tags: [Artículos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del artículo a obtener
 *     responses:
 *       200:
 *         description: Éxito, devuelve el artículo solicitado
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
 *                       type: integer
 *                     nombre:
 *                       type: string
 *                     precio_base:
 *                       type: number 
 *                     precio_coste:
 *                       type: number 
 *                     stock:
 *                       type: number 
 *                     descripcion:
 *                       type: string
 *                     proveedorId:
 *                       type: number 
 *                     empresaId:
 *                       type: number
 *       404:
 *         description: Artículo no encontrado
 *       500:
 *         description: Error del servidor
 */
articulosRouter.get("/:id", articulosController.getOne)
/**
 * @swagger
 * /costrack/articulos:
 *   post:
 *     summary: Crear un nuevo artículo
 *     tags: [Artículos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               precio_base:
 *                 type: number 
 *               precio_coste:
 *                 type: number 
 *               stock:
 *                 type: number 
 *               descripcion:
 *                 type: string
 *               proveedorId:
 *                 type: number 
 *               empresaId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Artículo creado con éxito
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
 *                     precio_base:
 *                       type: number 
 *                     precio_coste:
 *                       type: number 
 *                     stock:
 *                       type: number 
 *                     descripcion:
 *                       type: string
 *                     proveedorId:
 *                       type: number 
 *                     empresaId:
 *                       type: number
 *       500:
 *         description: Error del servidor
 */
articulosRouter.post("/", articulosController.post)

/**
 * @swagger
 * /costrack/articulos/{id}:
 *   put:
 *     summary: Actualizar un artículo existente
 *     tags: [Artículos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del artículo a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               precio_base:
 *                 type: number 
 *               precio_coste:
 *                 type: number 
 *               stock:
 *                 type: number 
 *               descripcion:
 *                 type: string
 *               proveedorId:
 *                 type: number 
 *               empresaId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Artículo actualizado con éxito
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
 *         description: Artículo no encontrado
 *       500:
 *         description: Error del servidor
 */

articulosRouter.put("/:id", articulosController.put)


/**
 * @swagger
 * /costrack/articulos/{id}:
 *   patch:
 *     summary: Actualizar parcialmente un artículo existente
 *     tags: [Artículos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del artículo a actualizar parcialmente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               precio_base:
 *                 type: number 
 *               precio_coste:
 *                 type: number 
 *               stock:
 *                 type: number 
 *               descripcion:
 *                 type: string
 *               proveedorId:
 *                 type: number 
 *               empresaId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Artículo actualizado parcialmente con éxito
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
 *         description: Artículo no encontrado
 *       500:
 *         description: Error del servidor
 */
articulosRouter.patch("/:id", articulosController.patch)

/**
 * @swagger
 * /costrack/articulos/{id}:
 *   delete:
 *     summary: Eliminar un artículo existente
 *     tags: [Artículos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del artículo a eliminar
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
 *         description: Artículo no encontrado
 *       500:
 *         description: Error del servidor
 */
articulosRouter.delete("/:id", articulosController.remove)

module.exports = articulosRouter