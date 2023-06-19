// Importamos los modelos de componente
const Articulo = require("../models/Articulo");
const Pedido = require("../models/Pedido");
const Cliente = require("../models/Cliente");
const PedidoLinea = require("../models/PedidoLinea");

// Obtiene todos los pedidos
const getAll = async () => {
    try {
        const all = await Pedido.findAll();
        return all;
    } catch (error) {
        return error;
    }
};

// Obtiene un pedido específico basado en su ID
const getOne = async (id) => {
    try {
        return await Pedido.findOne({
            where: {
                id: id,
            },
            include: [
                {
                    model: PedidoLinea,
                    include: {
                        model: Articulo,
                    },
                },
                {
                    model: Cliente,
                },
            ],
        });
    } catch (error) {
        return error;
    }
};

// Crea un nuevo pedido
const post = async (newItem) => {
    console.log(newItem);
    try {
        const newPedido = await Pedido.create({
            comentarios: newItem.comentarios,
            comercialId: newItem.comercialId,
            clienteId: newItem.clienteId,
        });
        try {
            newItem.articulos.forEach(async (lineaPedido) => {
                await PedidoLinea.create({
                    cantidad: lineaPedido.cantidad,
                    precio_unidad: lineaPedido.precio_unidad,
                    pedidoId: newPedido.id,
                    articuloId: lineaPedido.articuloId,
                });

                // Actualizar el campo "stock" del artículo en PedidoLinea
                const articulo = await Articulo.findByPk(lineaPedido.articuloId);
                if (articulo) {
                    const nuevoStock = articulo.stock - lineaPedido.cantidad;
                    await articulo.update({ stock: nuevoStock });
                }
            });
            return newPedido;
        } catch (error) {
            return error;
        }
    } catch (error) {
        return error;
    }
};

// Actualiza los datos de un pedido
const put = async (newItem, id) => {
    return await Pedido.update(newItem, { where: { id } });
};

// Actualiza parcialmente los datos de un pedido
const patch = async (newItem, id) => {
    return await Pedido.patch(newItem, { where: { id: id } });
};

// Elimina un pedido
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
