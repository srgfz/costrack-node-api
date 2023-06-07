const comercialesRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const comercialesController = require("../../controllers/comercialesController")

const middlewares = require("./middlewares/middlewares")

/**
 * @swagger
 * tags:
 *   name: Comerciales
 *   description: Endpoints para administrar comerciales
 */

/**
 * @swagger
 * /costrack/comerciales:
 *   get:
 *     summary: Obtener todos los comerciales
 *     tags: [Comerciales]
 *     responses:
 *       200:
 *         description: Éxito, devuelve todos los comerciales
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
 *                       dni:
 *                         type: string
 *                       nombre:
 *                         type: string
 *                       apellidos:
 *                         type: string 
 *                       empresaId:
 *                         type: number 
 *                       userId:
 *                         type: number 
 *       500:
 *         description: Error del servidor
 */

comercialesRouter.get("/", comercialesController.getAll)

/**
 * @swagger
 * /costrack/comerciales/{id}:
 *   get:
 *     summary: Obtener un comercial por su ID
 *     tags: [Comerciales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del comercial a obtener
 *     responses:
 *       200:
 *         description: Éxito, devuelve el comercial solicitado
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
 *                     dni:
 *                       type: string
 *                     nombre:
 *                       type: string
 *                     apellidos:
 *                       type: string 
 *                     empresaId:
 *                       type: number 
 *                     userId:
 *                       type: number 
 *       404:
 *         description: Comercial no encontrado
 *       500:
 *         description: Error del servidor
 */
comercialesRouter.get("/:id", middlewares.checkComercialAndIdComercial, middlewares.checkEmpresa, comercialesController.getOne)

/**
 * @swagger
 * /costrack/comerciales/gastos/{id}:
 *   get:
 *     summary: Obtener los gastos de un comercial por su ID
 *     tags: [Comerciales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del comercial para obtener los gastos
 *       - in: query
 *         name: date1
 *         schema:
 *           type: string
 *         description: filtrar los gastos por fechas. Fecha de inicio
 *       - in: query
 *         name: date2
 *         schema:
 *           type: string
 *         description: filtrar los gastos por fechas. Fecha de fin
 *     responses:
 *       200:
 *         description: Éxito, devuelve los gastos del comercial
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
 *                     dni:
 *                       type: string
 *                     nombre:
 *                       type: string
 *                     apellidos:
 *                       type: string 
 *                     empresaId:
 *                       type: number 
 *                     userId:
 *                       type: number 
 *                     gastos:
 *                       type: array 
 *                       items: 
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: number
 *                           nombre_emisor:
 *                             type: string
 *                           cuantia:
 *                             type: number
 *                           foto:
 *                             type: string 
 *                           categoria:
 *                             type: string 
 *                           fecha_gasto:
 *                             type: string  
 *                           observaciones:
 *                             type: string 
 *                           comercialId:
 *                             type: number 
 *       404:
 *         description: Comercial no encontrado
 *       500:
 *         description: Error del servidor
 */

comercialesRouter.get("/gastos/:id", middlewares.checkComercialAndIdComercial, middlewares.checkEmpresa, comercialesController.getBills)

/**
 * @swagger
 * /costrack/comerciales/pedidos/{id}:
 *   get:
 *     summary: Obtener los pedidos de un comercial por su ID
 *     tags: [Comerciales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del comercial para obtener los pedidos
 *       - in: query
 *         name: date1
 *         schema:
 *           type: string
 *         description: filtrar los pedidos por fechas. Fecha de inicio
 *       - in: query
 *         name: date2
 *         schema:
 *           type: string
 *         description: filtrar los pedidos por fechas. Fecha de fin
 *     responses:
 *       200:
 *         description: Éxito, devuelve los pedidos del comercial
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
 *                     dni:
 *                       type: string
 *                     nombre:
 *                       type: string
 *                     apellidos:
 *                       type: string 
 *                     empresaId:
 *                       type: number 
 *                     userId:
 *                       type: number 
 *                     pedidos:
 *                       type: array 
 *                       items: 
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: number
 *                           comentarios:
 *                             type: string
 *                           createdAt:
 *                             type: integer
 *                           updatedAt:
 *                             type: string 
 *                           comercialId:
 *                             type: number 
 *                           clienteId:
 *                             type: number 
 *                           pedido_lineas:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 id:
 *                                   type: integer
 *                                 cantidad:
 *                                   type: integer
 *                                 precio_unidad:
 *                                   type: number 
 *                                 pedidoId:
 *                                   type: number 
 *                                 articuloId:
 *                                   type: number
 *                                 articulo:
 *                                   type: object
 *                                   properties:
 *                                     id:
 *                                       type: integer
 *                                     nombre:
 *                                       type: string
 *                                     precio_base:
 *                                       type: number 
 *                                     precio_coste:
 *                                       type: number 
 *                                     stock:
 *                                       type: number
 *                                     descripcion:
 *                                       type: string
 *                                     proveedorId:
 *                                       type: number
 *                                     empresaId:
 *                                       type: number
 *       404:
 *         description: Comercial no encontrado
 *       500:
 *         description: Error del servidor
 */
comercialesRouter.get("/pedidos/:id", middlewares.checkComercialAndIdComercial, middlewares.checkEmpresa, comercialesController.getOrders)

/**
 * @swagger
 * /costrack/comerciales:
 *   post:
 *     summary: Crear un nuevo comercial
 *     tags: [Comerciales]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *                   type: object
 *                   properties:
 *                     dni:
 *                       type: string
 *                     nombre:
 *                       type: string
 *                     apellidos:
 *                       type: string 
 *                     empresaId:
 *                       type: number 
 *                     userId:
 *                       type: number 
 *     responses:
 *       200:
 *         description: Comercial creado con éxito
 *         content:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                   properties:
 *                     dni:
 *                       type: string
 *                     nombre:
 *                       type: string
 *                     apellidos:
 *                       type: string 
 *                     empresaId:
 *                       type: number 
 *                     userId:
 *                       type: number 
 *       400:
 *         description: Datos del comercial inválidos
 *       500:
 *         description: Error del servidor
 */
comercialesRouter.post("/", middlewares.checkEmpresaRol, comercialesController.post)

/**
 * @swagger
 * /costrack/comerciales/{id}:
 *   put:
 *     summary: Actualizar un comercial por su ID
 *     tags: [Comerciales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del comercial a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *                   type: object
 *                   properties:
 *                     dni:
 *                       type: string
 *                     nombre:
 *                       type: string
 *                     apellidos:
 *                       type: string 
 *                     empresaId:
 *                       type: number 
 *                     userId:
 *                       type: number 
 *     responses:
 *       200:
 *         description: Comercial actualizado con éxito
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
 *         description: Datos del comercial inválidos
 *       404:
 *         description: Comercial no encontrado
 *       500:
 *         description: Error del servidor
 */

comercialesRouter.put("/:id", middlewares.checkComercialAndIdComercial, middlewares.checkEmpresa, comercialesController.put)

/**
 * @swagger
 * /costrack/comerciales/{id}:
 *   patch:
 *     summary: Actualizar parcialmente un comercial por su ID
 *     tags: [Comerciales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del comercial a actualizar parcialmente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *                   type: object
 *                   properties:
 *                     dni:
 *                       type: string
 *                     nombre:
 *                       type: string
 *                     apellidos:
 *                       type: string 
 *                     empresaId:
 *                       type: number 
 *                     userId:
 *                       type: number 
 *     responses:
 *       200:
 *         description: Comercial actualizado con éxito
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
 *         description: Datos del comercial inválidos
 *       404:
 *         description: Comercial no encontrado
 *       500:
 *         description: Error del servidor
 */

comercialesRouter.patch("/:id", middlewares.checkComercialAndIdComercial, middlewares.checkEmpresa, comercialesController.patch)


/**
 * @swagger
 * /costrack/comerciales/{id}:
 *   delete:
 *     summary: Eliminar un comercial por su ID
 *     tags: [Comerciales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del comercial a eliminar
 *     responses:
 *       200:
 *         description: Comercial eliminado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *       404:
 *         description: Comercial no encontrado
 *       500:
 *         description: Error del servidor
 */
comercialesRouter.delete("/:id", comercialesController.remove)

module.exports = comercialesRouter