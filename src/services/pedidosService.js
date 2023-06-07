//Importamos el modelo de componente:
const Articulo = require("../models/Articulo")
const Pedido = require("../models/Pedido")
const PedidoLinea = require("../models/PedidoLinea")


const getAll = async () => {
    try {
        const all = await Pedido.findAll(
        )
        return all
    }
    catch (error) {
        return error
    }
}

const getOne = async (id) => {
    try {
        return await Pedido.findOne({
            where: {
                id: id,
            },
            include: {
                model: PedidoLinea,
                include: {
                    model: Articulo,
                },
            },
        })
    }
    catch (error) {
        return error
    }
}

const post = async (newItem) => {
    console.log(newItem)
    try {
        const newPedido = await Pedido.create({
            comentarios: newItem.comentarios,
            comercialId: newItem.comercialId,
            clienteId: newItem.clienteId
        });
        try {
            newItem.articulos.forEach(async lineaPedido => {
                await PedidoLinea.create({
                    cantidad: lineaPedido.cantidad,
                    precio_unidad: lineaPedido.precio_unidad,
                    pedidoId: newPedido.id,
                    articuloId: lineaPedido.articuloId
                })
            });
            return newPedido;
        }
        catch (error) {
            return error
        }
    }
    catch (error) {
        return error
    }
}

const put = async (newItem, id) => {
    return await Pedido.update(newItem, { where: { id } })
};

const patch = async (newItem, id) => {
    return await Pedido.patch(newItem, { where: { id: id } });
};

const remove = async (id) => {
    return await Pedido.destroy({ where: { id: id } });
};

module.exports = {
    getAll,
    getOne,
    post,
    put,
    patch,
    remove,
};
