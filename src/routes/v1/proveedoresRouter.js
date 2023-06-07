const proveedoresRouter = require("express").Router(); // En las rutas siempre ejecuto express.Router()
// Importo el controlador de proveedores
const proveedoresController = require("../../controllers/proveedoresController");

/**
 * @swagger
 * tags:
 *   name: Proveedores
 *   description: Endpoints para gestionar los Proveedores
 */

/**
 * @swagger
 * /costrack/proveedores:
 *   get:
 *     summary: Obtener todos los proveedores
 *     tags: [Proveedores]
 *     responses:
 *       200:
 *         description: Éxito, devuelve la lista de proveedores
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
 */

proveedoresRouter.get("/", proveedoresController.getAll);

/**
 * @swagger
 * /costrack/proveedores/{id}:
 *   get:
 *     summary: Obtener un proveedor por su ID
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del proveedor a obtener
 *     responses:
 *       200:
 *         description: Éxito, devuelve el proveedor solicitado
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
 *       404:
 *         description: Proveedor no encontrado
 */

proveedoresRouter.get("/:id", proveedoresController.getOne);

/**
 * @swagger
 * /costrack/proveedores:
 *   post:
 *     summary: Crear un nuevo proveedor
 *     tags: [Proveedores]
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
 *     responses:
 *       200:
 *         description: Éxito, devuelve los datos del proveedor creado
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
 *       400:
 *         description: Datos del proveedor inválidos
 */

proveedoresRouter.post("/", proveedoresController.post);

/**
 * @swagger
 * /costrack/proveedores/{id}:
 *   put:
 *     summary: Actualizar un proveedor por su ID
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del proveedor a actualizar
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
 *     responses:
 *       200:
 *         description: Éxito, devuelve los datos del proveedor actualizado
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
 *         description: Datos del proveedor inválidos
 *       404:
 *         description: Proveedor no encontrado
 */

proveedoresRouter.put("/:id", proveedoresController.put);

/**
 * @swagger
 * /costrack/proveedores/{id}:
 *   patch:
 *     summary: Actualizar parcialmente un proveedor por su ID
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del proveedor a actualizar
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
 *     responses:
 *       200:
 *         description: Éxito, devuelve los datos del proveedor actualizado
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
 *         description: Datos del proveedor inválidos
 *       404:
 *         description: Proveedor no encontrado
 */

proveedoresRouter.patch("/:id", proveedoresController.patch);

/**
 * @swagger
 * /costrack/proveedores/{id}:
 *   delete:
 *     summary: Eliminar un proveedor por su ID
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del proveedor a eliminar
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
 *         description: Proveedor no encontrado
 */

proveedoresRouter.delete("/:id", proveedoresController.remove);

module.exports = proveedoresRouter;
