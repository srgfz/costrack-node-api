//Importamos el modelo de componente:
const Empresa = require("../models/Empresa")
const Cliente = require("../models/Cliente")
const Articulo = require("../models/Articulo")
const Comercial = require("../models/Comercial")
const Gasto = require("../models/Gasto")
const Pedido = require("../models/Pedido")
const PedidoLinea = require("../models/PedidoLinea")

const { Op } = require("sequelize");
const bcryptjs = require('bcryptjs');
const User = require("../models/User")

const getAll = async () => {
    try {
        const all = await Empresa.findAll(
        )
        return all
    }
    catch (error) {
        return error
    }
}

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
                limit: 5, // Limitar la cantidad de clientes a 5
            },
        });
    } catch (error) {
        return error;
    }
};


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
                limit: 5, // Limitar la cantidad de productos a 5
            },
            order: [[Articulo, "nombre", "ASC"]], // Ordenar por la columna "nombre" en orden ascendente
        });
    } catch (error) {
        return error;
    }
};

const getCommercial = async (id) => {
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
                        },
                    ],
                },
            ],
            order: [[Comercial, "nombre", "ASC"], [Comercial, "apellidos", "ASC"]], // Ordenar por nombre y apellidos en orden ascendente
        });
    } catch (error) {
        return error;
    }
};

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

const getComercialByName = async (id, q) => {
    try {
        return await Empresa.findOne({
            where: {
                id: id,
            },
            include: {
                model: Comercial,
                where: {
                    nombre: {
                        [Op.like]: `%${q.toLowerCase()}%`
                    }
                },
                order: [["nombre", "DESC"]],
                limit: 5, // Limitar la cantidad a 5
            },
        });
    } catch (error) {
        return error;
    }
};

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
}

const post = async (newItem) => {
    try {
        return await Empresa.create(newItem);
    }
    catch (error) {
        return error
    }
}

const put = async (newItem, id) => {
    newItem.password = bcryptjs.hashSync(newItem.password, 10)
    await User.update(newItem, { where: { id: newItem.idUser } });
    return await Empresa.update(newItem, { where: { id } })
};

const patch = async (newItem, id) => {
    newItem.password = bcryptjs.hashSync(newItem.password, 10)
    await User.update(newItem, { where: { id: newItem.idUser } });
    return await Empresa.update(newItem, { where: { id: id } });
};

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
