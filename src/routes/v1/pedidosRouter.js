const pedidosRouter = require("express").Router();
const pedidosController = require("../../controllers/pedidosController");
const middlewares = require("./middlewares/middlewares");

/**
 * @swagger
 * tags:
 *   name: Pedidos
 *   description: Endpoints para gestionar los Pedidos
 */

/**
 * @swagger
 *  /costrack/pedidos:
 *   get:
 *     summary: Obtener todos los pedidos
 *     tags: [Pedidos]
 *     responses:
 *       200:
 *         description: Éxito, devuelve la lista de pedidos
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
 *                       comentarios:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                       updatedAt:
 *                         type: string 
 *                       comercialId:
 *                         type: number 
 *                       clienteId:
 *                         type: number 
 */

pedidosRouter.get("/", pedidosController.getAll);

/**
 * @swagger
 * /costrack/pedidos/{id}:
 *   get:
 *     summary: Obtener un pedido por su ID
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del pedido a obtener
 *     responses:
 *       200:
 *         description: Éxito, devuelve el pedido solicitado, con todas sus líneas de pedido y sus artículos
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
 *                     comentarios:
 *                       type: string
 *                     createdAt:
 *                       type: integer
 *                     updatedAt:
 *                       type: string 
 *                     comercialId:
 *                       type: number 
 *                     clienteId:
 *                       type: number 
 *                     pedido_lineas:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                           cantidad:
 *                             type: integer
 *                           precio_unidad:
 *                             type: number 
 *                           pedidoId:
 *                             type: number 
 *                           articuloId:
 *                             type: number 
 *                           articulo:
 *                             type: object
 *                             properties: 
 *                               id:
 *                                 type: number 
 *                               nombre:
 *                                 type: string 
 *                               precio_base:
 *                                 type: number 
 *                               precio_coste:
 *                                 type: number 
 *                               stock:
 *                                 type: number 
 *                               descripcion:
 *                                 type: string 
 *                               proveedorId:
 *                                 type: number 
 *                               empresaId:
 *                                 type: number 
 *       404:
 *         description: Pedido no encontrado
 */

pedidosRouter.get("/:id", pedidosController.getOne);

/**
 * @swagger
 * /costrack/pedidos:
 *   post:
 *     summary: Crear un nuevo pedido y todas las líneas de pedido asociadas a dicho pedido
 *     tags: [Pedidos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comentarios:
 *                 type: string
 *               comercialId:
 *                 type: number 
 *               clienteId:
 *                 type: number 
 *               articulos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     cantidad:
 *                       type: integer
 *                     precio_unidad:
 *                       type: number 
 *                     articuloId:
 *                       type: number  
 *     responses:
 *       200:
 *         description: Éxito, devuelve el pedido creado
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
 *                     comentarios:
 *                       type: string
 *                     comercialId:
 *                       type: number 
 *                     clienteId:
 *                       type: number 
 *                     articulos:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           cantidad:
 *                             type: integer
 *                           precio_unidad:
 *                             type: number 
 *                           articuloId:
 *                             type: number  
 *       400:
 *         description: Datos del pedido inválidos
 */

pedidosRouter.post("/", middlewares.checkComercialRol, pedidosController.post);

/**
 * @swagger
 * /costrack/pedidos/{id}:
 *   put:
 *     summary: Actualizar un pedido por su ID
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del pedido a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comentarios:
 *                 type: string
 *               comercialId:
 *                 type: number 
 *               clienteId:
 *                 type: number 
 *     responses:
 *       200:
 *         description: Éxito, devuelve el pedido actualizado
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
 *         description: Datos del pedido inválidos
 *       404:
 *         description: Pedido no encontrado
 */

pedidosRouter.put("/:id", pedidosController.put);

/**
 * @swagger
 * /costrack/pedidos/{id}:
 *   patch:
 *     summary: Actualizar parcialmente un pedido por su ID
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del pedido a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comentarios:
 *                 type: string
 *               comercialId:
 *                 type: number 
 *               clienteId:
 *                 type: number 
 *     responses:
 *       200:
 *         description: Éxito, devuelve el pedido actualizado
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
 *         description: Datos del pedido inválidos
 *       404:
 *         description: Pedido no encontrado
 */

pedidosRouter.patch("/:id", pedidosController.patch);

/**
 * @swagger
 *  /costrack/pedidos/{id}:
 *   delete:
 *     summary: Eliminar un pedido por su ID
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del pedido a eliminar
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
 *         description: Pedido no encontrado
 */

pedidosRouter.delete("/:id", pedidosController.remove);

module.exports = pedidosRouter;
