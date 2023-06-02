//Importamos el modelo de componente:
const Pedido = require("../models/Pedido")


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
            }
        })
    }
    catch (error) {
        return error
    }
}

const post = async (newItem) => {
    try {
        return await Pedido.create(newItem);
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
