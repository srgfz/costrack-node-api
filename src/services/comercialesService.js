//Importamos el modelo de componente:
const Comercial = require("../models/Comercial")


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
    post,
    put,
    patch,
    remove,
};
