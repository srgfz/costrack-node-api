//Importamos el modelo de componente:
const Empresa = require("../models/Empresa")
const Cliente = require("../models/Cliente")
const Articulo = require("../models/Articulo")
const Comercial = require("../models/Comercial")
const Gasto = require("../models/Gasto")
const Pedido = require("../models/Pedido")
const PedidoLinea = require("../models/PedidoLinea")

const { Op } = require("sequelize");

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
                order: [["nombre", "ASC"]], // Ordenar por la columna "nombre" en orden ascendente
            },
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
                order: [["nombre", "ASC"]],
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
                order: [["nombre", "ASC"]], // Ordenar por la columna "nombre" en orden ascendente
            },
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
                order: [["nombre", "ASC"]],
                limit: 5, // Limitar la cantidad de productos a 5
            },
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
                    order: [["nombre", "ASC"], ["apellidos", "ASC"]], // Ordenar por nombre y apellidos en orden ascendente
                    include: [
                        Gasto,
                        {
                            model: Pedido,
                            include: PedidoLinea,
                        },
                    ],
                },
            ],
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
                        },
                        {
                            model: Pedido,
                            include: PedidoLinea,
                            where: {
                                createdAt: {
                                    [Op.between]: [date1, date2]
                                }
                            }
                        },
                    ],
                },
            ],
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
                order: [["nombre", "ASC"]],
                limit: 5, // Limitar la cantidad de productos a 5
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
    return await Empresa.update(newItem, { where: { id } })
};

const patch = async (newItem, id) => {
    return await Empresa.patch(newItem, { where: { id: id } });
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
