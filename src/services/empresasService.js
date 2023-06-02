//Importamos el modelo de componente:
const Empresa = require("../models/Empresa")


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
    getOne,
    post,
    put,
    patch,
    remove,
};
