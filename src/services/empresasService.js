// Importamos los modelos de componente
const Empresa = require("../models/Empresa");
const Cliente = require("../models/Cliente");
const Articulo = require("../models/Articulo");
const Comercial = require("../models/Comercial");
const Gasto = require("../models/Gasto");
const Pedido = require("../models/Pedido");
const PedidoLinea = require("../models/PedidoLinea");

// Importamos las dependencias necesarias
const { Op } = require("sequelize");
const bcryptjs = require('bcryptjs');
const User = require("../models/User");

// Obtiene todas las empresas
const getAll = async () => {
    try {
        const all = await Empresa.findAll();
        return all;
    } catch (error) {
        return error;
    }
};

// Obtiene los clientes de una empresa específica
const getClients = async (id) => {
    try {
        return await Empresa.findOne({
            where: {
                id: id,
            },
            include: {
                model: Cliente,
            },
            order: [[Cliente, "nombre", "ASC"]], // Ordenar por la columna "nombre" en orden ascendente
        });
    } catch (error) {
        return error;
    }
};

// Obtiene los clientes de una empresa específica por su nombre (filtrado)
const getClientsByName = async (id, q) => {
    try {
        return await Empresa.findOne({
            where: {
                id: id,
            },
            include: {
                model: Cliente,
                where: {
                    nombre: {
                        [Op.like]: `%${q.toLowerCase()}%`
                    }
                },
                order: [["nombre", "DESC"]],
            },
        });
    } catch (error) {
        return error;
    }
};

// Obtiene los productos de una empresa específica
const getProducts = async (id) => {
    try {
        return await Empresa.findOne({
            where: {
                id: id,
            },
            include: {
                model: Articulo,
            },
            order: [[Articulo, "nombre", "ASC"]], // Ordenar por la columna "nombre" en orden ascendente
        });
    } catch (error) {
        return error;
    }
};

// Obtiene los productos de una empresa específica por su nombre (filtrado)
const getProductsByName = async (id, q) => {
    try {
        return await Empresa.findOne({
            where: {
                id: id,
            },
            include: {
                model: Articulo,
                where: {
                    nombre: {
                        [Op.like]: `%${q.toLowerCase()}%`
                    }
                },
            },
            order: [[Articulo, "nombre", "ASC"]], // Ordenar por la columna "nombre" en orden ascendente

        });
    } catch (error) {
        return error;
    }
};

// Obtiene todos los pedidos de una empresa específica con sus comerciales, gastos y líneas de pedido
const getAllOrders = async (id) => {
    try {
        return await Empresa.findOne({
            where: {
                id: id,
            },
            include: [
                {
                    model: Comercial,
                    include: [
                        Gasto,
                        {
                            model: Pedido,
                            include: PedidoLinea,
                        }, {
                            model: User
                        }
                    ],
                },
            ],
            order: [[Comercial, "nombre", "ASC"], [Comercial, "apellidos", "ASC"]], // Ordenar por nombre y apellidos en orden ascendente
        });
    } catch (error) {
        return error;
    }
};

// Obtiene un comercial específico de una empresa con su usuario asociado
const getCommercial = async (id) => {
    try {
        return await Empresa.findOne({
            where: {
                id: id,
            },
            include: [
                {
                    model: Comercial,
                    include:
                        { model: User }
                },
            ],
            order: [[Comercial, "nombre", "ASC"], [Comercial, "apellidos", "ASC"]], // Ordenar por nombre y apellidos en orden ascendente
        });
    } catch (error) {
        return error;
    }
};

// Obtiene un comercial específico de una empresa por su nombre (filtrado)
const getComercialByName = async (id, q) => {
    try {
        return await Empresa.findOne({
            where: {
                id: id,
            },
            include: {
                model: Comercial,
                include: { model: User },
                where: {
                    nombre: {
                        [Op.like]: `%${q.toLowerCase()}%`
                    }
                },
                order: [["nombre", "DESC"]],
            },
        });
    } catch (error) {
        return error;
    }
};

// Obtiene un comercial específico de una empresa por un rango de fechas, incluyendo sus gastos y pedidos
const getCommercialByDates = async (id, date1, date2) => {
    try {
        return await Empresa.findOne({
            where: {
                id: id,
            },
            include: [
                {
                    model: Comercial,
                    order: [["nombre", "ASC"], ["apellidos", "ASC"]],
                    include: [
                        {
                            model: Gasto,
                            where: {
                                fecha_gasto: {
                                    [Op.between]: [date1, date2]
                                }
                            },
                            order: [["fecha_gasto", "DESC"]] // Ordenar por la columna "fecha_gasto" en orden descendente
                        },
                        {
                            model: Pedido,
                            include: {
                                model: PedidoLinea,
                                include: Articulo
                            },
                            where: {
                                createdAt: {
                                    [Op.between]: [date1, date2]
                                }
                            },
                            order: [["createdAt", "DESC"]]
                        },
                    ],
                    order: [[Gasto, "fecha_gasto", "DESC"], [Pedido, "createdAt", "ASC"]]
                },
            ],
            order: [
                [Comercial, 'nombre', 'ASC'],
                [Comercial, 'apellidos', 'ASC']
            ]
        });
    } catch (error) {
        return error;
    }
};

// Obtiene una empresa específica con su usuario asociado
const getOne = async (id) => {
    try {
        return await Empresa.findOne({
            where: {
                id: id,
            },
            include: {
                model: User,
                attributes: ["id", "email", "rol", "createdAt", "updatedAt"]
            }
        })
    }
    catch (error) {
        return error
    }
};

// Crea una nueva empresa
const post = async (newItem) => {
    try {
        return await Empresa.create(newItem);
    }
    catch (error) {
        return error
    }
};

// Actualiza los datos de una empresa y su usuario asociado
const put = async (newItem, id) => {
    newItem.password = bcryptjs.hashSync(newItem.password, 10);
    await User.update(newItem, { where: { id: newItem.idUser } });
    return await Empresa.update(newItem, { where: { id } });
};

// Actualiza parcialmente los datos de una empresa y su usuario asociado
const patch = async (newItem, id) => {
    newItem.password = bcryptjs.hashSync(newItem.password, 10);
    await User.update(newItem, { where: { id: newItem.idUser } });
    return await Empresa.update(newItem, { where: { id: id } });
};

// Elimina una empresa específica
const remove = async (id) => {
    return await Empresa.destroy({ where: { id: id } });
};

module.exports = {
    getAll,
    getClients,
    getClientsByName,
    getProducts,
    getProductsByName,
    getCommercial,
    getComercialByName,
    getCommercialByDates,
    getOne,
    post,
    put,
    patch,
    remove,
};
