const pedidolineasRouter = require("express").Router();

// Importo el controlador de líneas de pedido
const pedidolineasController = require("../../controllers/pedidolineasController");

/**
 * @swagger
 * tags:
 *   name: Detalles Pedido
 *   description: Endpoints para gestionar las líneas de pedido
 */


/**
 * @swagger
 * /costrack/lineasPedido:
 *   get:
 *     summary: Obtener todas las líneas de pedidos
 *     tags: [Detalles Pedido]
 *     responses:
 *       200:
 *         description: Éxito, devuelve todas las líneas de pedido
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
 *                       cantidad:
 *                         type: number
 *                       precio_unidad:
 *                         type: integer
 *                       precioId:
 *                         type: number 
 *                       articuloId:
 *                         type: number 
 *       500:
 *         description: Error del servidor
 */
pedidolineasRouter.get("/", pedidolineasController.getAll);

/**
 * @swagger
 * /costrack/pedidolineas/{id}:
 *   get:
 *     summary: Obtener una línea de pedido por su ID
 *     tags: [Detalles Pedido]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la línea de pedido a obtener
 *     responses:
 *       200:
 *         description: Éxito, devuelve la línea de pedido solicitada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 cantidad:
 *                   type: number
 *                 precio_unidad:
 *                   type: integer
 *                 precioId:
 *                   type: number 
 *                 articuloId:
 *                   type: number 
 *       404:
 *         description: Línea de pedido no encontrada
 *       500:
 *         description: Error del servidor
 */
pedidolineasRouter.get("/:id", pedidolineasController.getOne);

/**
 * @swagger
 * /costrack/lineasPedido:
 *   post:
 *     summary: Crear una nueva línea de pedido
 *     tags: [Detalles Pedido]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cantidad:
 *                 type: number
 *               precio_unidad:
 *                 type: number 
 *               pedidoId:
 *                 type: number 
 *               articuloId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Línea de pedido creada con éxito
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
 *                     cantidad:
 *                       type: number
 *                     precio_unidad:
 *                       type: number 
 *                     pedidoId:
 *                       type: number 
 *                     articuloId:
 *                       type: number
 *       400:
 *         description: Datos de la línea de pedido inválidos
 *       500:
 *         description: Error del servidor
 */
pedidolineasRouter.post("/", pedidolineasController.post);

/**
 * @swagger
 * /costrack/lineasPedido/{id}:
 *   put:
 *     summary: Actualizar una línea de pedido por su ID
 *     tags: [Detalles Pedido]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la línea de pedido a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cantidad:
 *                 type: number
 *               precio_unidad:
 *                 type: number 
 *               pedidoId:
 *                 type: number 
 *               articuloId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Línea de pedido actualizada con éxito
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
 *         description: Datos de la línea de pedido inválidos
 *       404:
 *         description: Línea de pedido no encontrada
 *       500:
 *         description: Error del servidor
 */
pedidolineasRouter.put("/:id", pedidolineasController.put);

/**
 * @swagger
 * /costrack/lineasPedido/{id}:
 *   patch:
 *     summary: Actualizar parcialmente una línea de pedido por su ID
 *     tags: [Detalles Pedido]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la línea de pedido a actualizar parcialmente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cantidad:
 *                 type: number
 *               precio_unidad:
 *                 type: number 
 *               pedidoId:
 *                 type: number 
 *               articuloId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Línea de pedido actualizada con éxito
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
 *         description: Datos de la línea de pedido inválidos
 *       404:
 *         description: Línea de pedido no encontrada
 *       500:
 *         description: Error del servidor
 */
pedidolineasRouter.patch("/:id", pedidolineasController.patch);

/**
 * @swagger
 * /costrack/lineasPedido/{id}:
 *   delete:
 *     summary: Eliminar una línea de pedido por su ID
 *     tags: [Detalles Pedido]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la línea de pedido a eliminar
 *     responses:
 *       204:
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
 *       404:
 *         description: Línea de pedido no encontrada
 *       500:
 *         description: Error del servidor
 */
pedidolineasRouter.delete("/:id", pedidolineasController.remove);

module.exports = pedidolineasRouter;
