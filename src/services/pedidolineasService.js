// Importamos el modelo de componente
const PedidoLinea = require("../models/PedidoLinea");

// Obtiene todas las líneas de pedido
const getAll = async () => {
    try {
        const all = await PedidoLinea.findAll();
        return all;
    } catch (error) {
        return error;
    }
};

// Obtiene una línea de pedido específica basada en su ID
const getOne = async (id) => {
    try {
        return await PedidoLinea.findOne({
            where: {
                id: id,
            },
        });
    } catch (error) {
        return error;
    }
};

// Crea una nueva línea de pedido
const post = async (newItem) => {
    try {
        return await PedidoLinea.create(newItem);
    } catch (error) {
        return error;
    }
};

// Actualiza los datos de una línea de pedido
const put = async (newItem, id) => {
    return await PedidoLinea.update(newItem, { where: { id } });
};

// Actualiza parcialmente los datos de una línea de pedido
const patch = async (newItem, id) => {
    return await PedidoLinea.patch(newItem, { where: { id: id } });
};

// Elimina una línea de pedido
const remove = async (id) => {
    return await PedidoLinea.destroy({ where: { id: id } });
};

module.exports = {
    getAll,
    getOne,
    post,
    put,
    patch,
    remove,
};
