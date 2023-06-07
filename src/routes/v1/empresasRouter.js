const empresasRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const empresasController = require("../../controllers/empresasController")

const middlewares = require("./middlewares/middlewares")

/**
 * @swagger
 * tags:
 *   name: Empresas
 *   description: Endpoints para gestionar las empresas
 */


/**
 * @swagger
 * /costrack/empresas:
 *   get:
 *     summary: Obtener todas las empresas
 *     tags: [Empresas]
 *     responses:
 *       200:
 *         description: Éxito, devuelve todas las empresas
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
 *                       cif:
 *                         type: string
 *                       nombre:
 *                         type: string
 *                       direccion:
 *                         type: string 
 *                       userId:
 *                         type: number 
 *       500:
 *         description: Error del servidor
 */
empresasRouter.get("/", empresasController.getAll);

/**
 * @swagger
 * /costrack/empresas/{id}:
 *   get:
 *     summary: Obtener una empresa por su ID
 *     tags: [Empresas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la empresa a obtener
 *     responses:
 *       200:
 *         description: Éxito, devuelve la empresa solicitada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 cif:
 *                   type: string
 *                 nombre:
 *                   type: string
 *                 direccion:
 *                   type: string 
 *                 userId:
 *                   type: number 
 *       403:
 *         description: Acceso no autorizado
 *       404:
 *         description: Empresa no encontrada
 *       500:
 *         description: Error del servidor
 */
empresasRouter.get("/:id", middlewares.checkEmployee, middlewares.checkEmpresaAndIdEmpresa, empresasController.getOne);

/**
 * @swagger
 * /costrack/empresas/clientes/{id}:
 *   get:
 *     summary: Obtener clientes de una empresa por el id de la empresa
 *     tags: [Empresas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la empresa
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Filtro para buscar clientes por su nombre.
 *     responses:
 *       200:
 *         description: Éxito, devuelve los clientes de la empresa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 cif:
 *                   type: string
 *                 nombre:
 *                   type: string
 *                 direccion:
 *                   type: string 
 *                 userId:
 *                   type: number 
 *                 clientes:
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
 *                       empresaId:
 *                         type: number 
 *       403:
 *         description: Acceso no autorizado
 *       404:
 *         description: Empresa no encontrada
 *       500:
 *         description: Error del servidor
 */
empresasRouter.get("/clientes/:id", middlewares.checkEmployee, middlewares.checkEmpresaAndIdEmpresa, empresasController.getClients);

/**
 * @swagger
 * /costrack/empresas/articulos/{id}:
 *   get:
 *     summary: Obtener artículos de una empresa por el id de la empresa
 *     tags: [Empresas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la empresa
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Filtro para buscar articulos por su nombre.
 *     responses:
 *       200:
 *         description: Éxito, devuelve los artículos de la empresa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 cif:
 *                   type: string
 *                 nombre:
 *                   type: string
 *                 direccion:
 *                   type: string 
 *                 userId:
 *                   type: number 
 *                 articulos:
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
 *       403:
 *         description: Acceso no autorizado
 *       404:
 *         description: Empresa no encontrada
 *       500:
 *         description: Error del servidor
 */
empresasRouter.get("/articulos/:id", middlewares.checkEmployee, middlewares.checkEmpresaAndIdEmpresa, empresasController.getProducts);

/**
 * @swagger
 * /costrack/empresas/comerciales/{id}:
 *   get:
 *     summary: Obtener comercial de una empresa por el id de la empresa
 *     tags: [Empresas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la empresa
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Filtro para buscar comerciales por su nombre.
 *       - in: query
 *         name: date1
 *         schema:
 *           type: string
 *         description: filtrar los pedidos y gastos de los comerciales. Fecha inicio
 *       - in: query
 *         name: date2
 *         schema:
 *           type: string
 *         description: filtrar los pedidos y gastos de los comerciales. Fecha fin
 *     responses:
 *       200:
 *         description: Éxito, devuelve los comerciales de la empresa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 cif:
 *                   type: string
 *                 nombre:
 *                   type: string
 *                 direccion:
 *                   type: string 
 *                 userId:
 *                   type: number 
 *                 comerciales:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
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
 *                       gastos:
 *                         type: array 
 *                         items: 
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: number
 *                             nombre_emisor:
 *                               type: string
 *                             cuantia:
 *                               type: number
 *                             foto:
 *                               type: string 
 *                             categoria:
 *                               type: string 
 *                             fecha_gasto:
 *                               type: string  
 *                             observaciones:
 *                               type: string 
 *                             comercialId:
 *                               type: number 
 *                       pedidos:
 *                         type: array 
 *                         items: 
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: number
 *                             comentarios:
 *                               type: string
 *                             createdAt:
 *                               type: integer
 *                             updatedAt:
 *                               type: string 
 *                             comercialId:
 *                               type: number 
 *                             clienteId:
 *                               type: number 
 *                             pedido_lineas:
 *                               type: array
 *                               items:
 *                                 type: object
 *                                 properties:
 *                                   id:
 *                                     type: integer
 *                                   cantidad:
 *                                     type: integer
 *                                   precio_unidad:
 *                                     type: number 
 *                                   pedidoId:
 *                                     type: number 
 *                                   articuloId:
 *                                     type: number 
 *       403:
 *         description: Acceso no autorizado
 *       404:
 *         description: Empresa no encontrada
 *       500:
 *         description: Error del servidor
 */
empresasRouter.get("/comerciales/:id", middlewares.checkEmpresaRol, middlewares.checkId, empresasController.getCommercial);

/**
 * @swagger
 * /costrack/empresas:
 *   post:
 *     summary: Crear una nueva empresa
 *     tags: [Empresas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cif:
 *                 type: string
 *               nombre:
 *                 type: string
 *               direccion:
 *                 type: string 
 *               userId:
 *                 type: number 
 *     responses:
 *       200:
 *         description: Empresa creada con éxito
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
 *                     cif:
 *                       type: string
 *                     nombre:
 *                       type: string
 *                     direccion:
 *                       type: string 
 *                     userId:
 *                       type: number 
 *       400:
 *         description: Datos de la empresa inválidos
 *       500:
 *         description: Error del servidor
 */
empresasRouter.post("/", empresasController.post);

/**
 * @swagger
 * /costrack/empresas/{id}:
 *   put:
 *     summary: Actualizar una empresa por su ID
 *     tags: [Empresas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la empresa a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cif:
 *                 type: string
 *               nombre:
 *                 type: string
 *               direccion:
 *                 type: string 
 *               userId:
 *                 type: number 
 *     responses:
 *       200:
 *         description: Empresa actualizada con éxito
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
 *       403:
 *         description: Acceso no autorizado
 *       404:
 *         description: Empresa no encontrada
 *       500:
 *         description: Error del servidor
 */
empresasRouter.put("/:id", middlewares.checkEmpresaRol, middlewares.checkId, empresasController.put);

/**
 * @swagger
 * /costrack/empresas/{id}:
 *   patch:
 *     summary: Actualizar parcialmente una empresa por su ID
 *     tags: [Empresas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la empresa a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cif:
 *                 type: string
 *               nombre:
 *                 type: string
 *               direccion:
 *                 type: string 
 *               userId:
 *     responses:
 *       200:
 *         description: Empresa actualizada con éxito
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
 *       403:
 *         description: Acceso no autorizado
 *       404:
 *         description: Empresa no encontrada
 *       500:
 *         description: Error del servidor
 */
empresasRouter.patch("/:id", middlewares.checkEmpresaRol, middlewares.checkId, empresasController.patch);

/**
 * @swagger
 * /costrack/empresas/{id}:
 *   delete:
 *     summary: Eliminar una empresa por su ID
 *     tags: [Empresas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la empresa a eliminar
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
 *       403:
 *         description: Acceso no autorizado
 *       404:
 *         description: Empresa no encontrada
 *       500:
 *         description: Error del servidor
 */
empresasRouter.delete("/:id", middlewares.checkEmpresaRol, middlewares.checkId, empresasController.remove);

module.exports = empresasRouter;