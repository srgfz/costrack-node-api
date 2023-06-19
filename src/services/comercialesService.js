// Importamos los modelos necesarios
const Comercial = require("../models/Comercial");
const Gasto = require("../models/Gasto");
const Pedido = require("../models/Pedido");
const PedidoLinea = require("../models/PedidoLinea");
const Articulo = require("../models/Articulo");
const bcryptjs = require('bcryptjs');

const { Op } = require("sequelize");
const Cliente = require("../models/Cliente");
const User = require("../models/User");

// Obtiene todos los comerciales
const getAll = async () => {
    try {
        return await Comercial.findAll();
    } catch (error) {
        return error;
    }
};

// Obtiene un comercial específico por su ID
const getOne = async (id) => {
    try {
        return await Comercial.findOne({
            where: {
                id: id,
            },
            include: {
                model: User,
                attributes: ["id", "email", "rol", "createdAt", "updatedAt"]
            }
        });
    } catch (error) {
        return error;
    }
};

// Obtiene los gastos de un comercial específico
const getBills = async (id) => {
    try {
        return await Comercial.findOne({
            where: {
                id: id,
            },
            include: {
                model: Gasto,
            },
            order: [[Gasto, "fecha_gasto", "DESC"]],
        });
    } catch (error) {
        return error;
    }
};

// Obtiene los gastos de un comercial específico dentro de un rango de fechas
const getBillsByDates = async (id, date1, date2) => {
    try {
        const comercial = await Comercial.findOne({
            where: {
                id: id,
            },
            include: [
                {
                    model: Gasto,
                    where: {
                        fecha_gasto: {
                            [Op.between]: [date1, date2]
                        }
                    },
                }
            ],
            order: [[Gasto, "fecha_gasto", "DESC"]],
        });
        if (comercial) {
            return comercial;
        } else {
            return Comercial.findOne({ where: { id: id } });
        }
    } catch (error) {
        return error;
    }
};

// Obtiene los pedidos de un comercial específico
const getOrders = async (id) => {
    try {
        return await Comercial.findOne({
            where: {
                id: id,
            },
            include: {
                model: Pedido,
                include: [
                    {
                        model: PedidoLinea,
                        include: {
                            model: Articulo,
                        },
                    },
                    {
                        model: Cliente
                    }
                ],
            },
            order: [[Pedido, "createdAt", "DESC"]],
        });
    } catch (error) {
        return error;
    }
};

// Obtiene los pedidos de un comercial específico dentro de un rango de fechas
const getOrdersByDates = async (id, date1, date2) => {
    try {
        const comercial = await Comercial.findOne({
            where: {
                id: id,
            },
            include: {
                model: Pedido,
                include: [
                    {
                        model: PedidoLinea,
                        include: Articulo
                    },
                    {
                        model: Cliente
                    }
                ],
                where: {
                    createdAt: {
                        [Op.between]: [date1, date2]
                    }
                },
            },
            order: [[Pedido, "createdAt", "DESC"]],
        });
        if (comercial) {
            return comercial;
        } else {
            return Comercial.findOne({ where: { id: id } });
        }
    } catch (error) {
        return error;
    }
};

// Crea un nuevo comercial
const post = async (newItem) => {
    try {
        return await Comercial.create(newItem);
    } catch (error) {
        return error;
    }
};

// Actualiza un comercial por su ID
const put = async (newItem, id) => {
    if (newItem.password) {
        newItem.password = bcryptjs.hashSync(newItem.password, 10);
    }
    await User.update(newItem, { where: { id: newItem.idUser } });
    return await Comercial.update(newItem, { where: { id } });
};

// Actualiza parcialmente un comercial por su ID
const patch = async (newItem, id) => {
    if (newItem.password) {
        newItem.password = bcryptjs.hashSync(newItem.password, 10);
    }
    await User.update(newItem, { where: { id: newItem.idUser } });
    return await Comercial.update(newItem, { where: { id: id } });
};

// Elimina un comercial por su ID
const remove = async (id) => {
    return await Comercial.destroy({ where: { id: id } });
};

module.exports = {
    getAll,
    getOne,
    getBills,
    getBillsByDates,
    getOrders,
    getOrdersByDates,
    post,
    put,
    patch,
    remove,
};
