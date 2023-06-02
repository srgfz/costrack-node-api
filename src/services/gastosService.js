//Importamos el modelo de componente:
const Gasto = require("../models/Gasto")


const getAll = async () => {
    try {
        const all = await Gasto.findAll(
        )
        return all
    }
    catch (error) {
        return error
    }
}

const getOne = async (id) => {
    try {
        return await Gasto.findOne({
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
        return await Gasto.create(newItem);
    }
    catch (error) {
        return error
    }
}

const put = async (newItem, id) => {
    return await Gasto.update(newItem, { where: { id } })
};

const patch = async (newItem, id) => {
    return await Gasto.patch(newItem, { where: { id: id } });
};

const remove = async (id) => {
    return await Gasto.destroy({ where: { id: id } });
};

module.exports = {
    getAll,
    getOne,
    post,
    put,
    patch,
    remove,
};
