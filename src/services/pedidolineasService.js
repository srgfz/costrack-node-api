//Importamos el modelo de componente:
const PedidoLinea = require("../models/PedidoLinea")


const getAll = async () => {
    try {
        const all = await PedidoLinea.findAll(
        )
        return all
    }
    catch (error) {
        return error
    }
}

const getOne = async (id) => {
    try {
        return await PedidoLinea.findOne({
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
        return await PedidoLinea.create(newItem);
    }
    catch (error) {
        return error
    }
}

const put = async (newItem, id) => {
    return await PedidoLinea.update(newItem, { where: { id } })
};

const patch = async (newItem, id) => {
    return await PedidoLinea.patch(newItem, { where: { id: id } });
};

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
