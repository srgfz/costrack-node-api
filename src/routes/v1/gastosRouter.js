const gastosRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const gastosController = require("../../controllers/gastosController")
const middlewares = require("./middlewares/middlewares")

/**
 * @swagger
 * tags:
 *   name: Gastos
 *   description: Endpoints para gestionar los gastos
 */

/**
 * @swagger
 * /costrack/gastos:
 *   get:
 *     summary: Obtener todos los gastos
 *     tags: [Gastos]
 *     responses:
 *       200:
 *         description: Éxito, devuelve todos los gastos
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
 *                       nombre_emisor:
 *                         type: string
 *                       cuantia:
 *                         type: number
 *                       foto:
 *                         type: string 
 *                       categoria:
 *                         type: string 
 *                       fecha_gasto:
 *                         type: string  
 *                       observaciones:
 *                         type: string 
 *                       comercialId:
 *                         type: number 
 *       500:
 *         description: Error del servidor
 */
gastosRouter.get("/", gastosController.getAll);

/**
 * @swagger
 * /costrack/gastos/{id}:
 *   get:
 *     summary: Obtener un gasto por su ID
 *     tags: [Gastos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del gasto a obtener
 *     responses:
 *       200:
 *         description: Éxito, devuelve el gasto solicitado
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
 *                     nombre_emisor:
 *                       type: string
 *                     cuantia:
 *                       type: number
 *                     foto:
 *                       type: string 
 *                     categoria:
 *                       type: string 
 *                     fecha_gasto:
 *                       type: string  
 *                     observaciones:
 *                       type: string 
 *                     comercialId:
 *                       type: number 
 *       404:
 *         description: Gasto no encontrado
 *       500:
 *         description: Error del servidor
 */
gastosRouter.get("/:id", gastosController.getOne);

/**
 * @swagger
 * /costrack/gastos:
 *   post:
 *     summary: Crear un nuevo gasto
 *     tags: [Gastos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_emisor:
 *                 type: string
 *               cuantia:
 *                 type: number 
 *               foto:
 *                 type: string 
 *               categoria:
 *                 type: string
 *               fecha_gasto:
 *                 type: string 
 *               observaciones:
 *                 type: string 
 *               comercialId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Gasto creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombre_emisor:
 *                   type: string
 *                 cuantia:
 *                   type: number 
 *                 foto:
 *                   type: string 
 *                 categoria:
 *                   type: string
 *                 fecha_gasto:
 *                   type: string 
 *                 observaciones:
 *                   type: string 
 *                 comercialId:
 *                   type: number
 *       400:
 *         description: Datos del gasto inválidos
 *       500:
 *         description: Error del servidor
 */
gastosRouter.post("/", middlewares.checkComercialRol, gastosController.post);

/**
 * @swagger
 * /costrack/gastos/{id}:
 *   put:
 *     summary: Actualizar un gasto por su ID
 *     tags: [Gastos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del gasto a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                 nombre_emisor:
 *                   type: string
 *                 cuantia:
 *                   type: number 
 *                 foto:
 *                   type: string 
 *                 categoria:
 *                   type: string
 *                 fecha_gasto:
 *                   type: string 
 *                 observaciones:
 *                   type: string 
 *                 comercialId:
 *                   type: number
 *     responses:
 *       200:
 *         description: Éxito, devuelve el gasto actualizado
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
 *         description: Datos del gasto inválidos
 *       404:
 *         description: Gasto no encontrado
 *       500:
 *         description: Error del servidor
 */
gastosRouter.put("/:id", gastosController.put);

/**
 * @swagger
 * /costrack/gastos/{id}:
 *   patch:
 *     summary: Actualizar parcialmente un gasto por su ID
 *     tags: [Gastos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del gasto a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                 nombre_emisor:
 *                   type: string
 *                 cuantia:
 *                   type: number 
 *                 foto:
 *                   type: string 
 *                 categoria:
 *                   type: string
 *                 fecha_gasto:
 *                   type: string 
 *                 observaciones:
 *                   type: string 
 *                 comercialId:
 *                   type: number
 *     responses:
 *       200:
 *         description: Éxito, devuelve el gasto actualizado
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
 *         description: Datos del gasto inválidos
 *       404:
 *         description: Gasto no encontrado
 *       500:
 *         description: Error del servidor
 */
gastosRouter.patch("/:id", gastosController.patch);

/**
 * @swagger
 * /costrack/gastos/{id}:
 *   delete:
 *     summary: Eliminar un gasto por su ID
 *     tags: [Gastos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del gasto a eliminar
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
 *         description: Gasto no encontrado
 *       500:
 *         description: Error del servidor
 */
gastosRouter.delete("/:id", gastosController.remove);

module.exports = gastosRouter;
