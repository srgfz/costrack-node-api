//Importamos el modelo de componente:
const Comercial = require("../models/Comercial")
const Gasto = require("../models/Gasto")
const Pedido = require("../models/Pedido")
const PedidoLinea = require("../models/PedidoLinea")
const Articulo = require("../models/Articulo")

const { Op } = require("sequelize");
const Cliente = require("../models/Cliente")


const getAll = async () => {
    try {
        const all = await Comercial.findAll(
        )
        return all
    }
    catch (error) {
        return error
    }
}

const getOne = async (id) => {
    try {
        return await Comercial.findOne({
            where: {
                id: id,
            }
        })
    }
    catch (error) {
        return error
    }
}


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

const getBillsByDates = async (id, date1, date2) => {
    try {
        return await Comercial.findOne({
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
    } catch (error) {
        return error;
    }
};

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
                    }, {
                        model: Cliente
                    }],
            },
            order: [[Pedido, "createdAt", "DESC"]], // Ordenar por la columna "createdAt" en orden descendente

        });
    } catch (error) {
        return error;
    }
};

const getOrdersByDates = async (id, date1, date2) => {
    try {
        return await Comercial.findOne({
            where: {
                id: id,
            },
            include: {
                model: Pedido,
                include: [{
                    model: PedidoLinea,
                    include: Articulo
                }, {
                    model: Cliente
                }],
                where: {
                    createdAt: {
                        [Op.between]: [date1, date2]
                    }
                },
            },
            order: [[Pedido, "createdAt", "DESC"]], // Ordenar por la columna "createdAt" en orden descendente
        });
    } catch (error) {
        return error;
    }
};

const post = async (newItem) => {
    try {
        return await Comercial.create(newItem);
    }
    catch (error) {
        return error
    }
}

const put = async (newItem, id) => {
    return await Comercial.update(newItem, { where: { id } })
};

const patch = async (newItem, id) => {
    return await Comercial.patch(newItem, { where: { id: id } });
};

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
