//Importamos el modelo de componente:
const Proveedor = require("../models/Proveedor")


const getAll = async () => {
    try {
        const all = await Proveedor.findAll(
        )
        return all
    }
    catch (error) {
        return error
    }
}

const getOne = async (id) => {
    try {
        return await Proveedor.findOne({
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
        return await Proveedor.create(newItem);
    }
    catch (error) {
        return error
    }
}

const put = async (newItem, id) => {
    return await Proveedor.update(newItem, { where: { id } })
};

const patch = async (newItem, id) => {
    return await Proveedor.patch(newItem, { where: { id: id } });
};

const remove = async (id) => {
    return await Proveedor.destroy({ where: { id: id } });
};

module.exports = {
    getAll,
    getOne,
    post,
    put,
    patch,
    remove,
};
