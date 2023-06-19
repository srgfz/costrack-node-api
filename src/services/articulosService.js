const Articulo = require("../models/Articulo");

const getAll = async () => {
    try {
        const all = await Articulo.findAll();
        return all;
    } catch (error) {
        return error;
    }
};

const getOne = async (id) => {
    try {
        return await Articulo.findOne({
            where: {
                id: id,
            },
        });
    } catch (error) {
        return error;
    }
};

const post = async (newItem) => {
    try {
        return await Articulo.create(newItem);
    } catch (error) {
        return error;
    }
};

const put = async (newItem, id) => {
    return await Articulo.update(newItem, { where: { id } });
};

const patch = async (newItem, id) => {
    return await Articulo.patch(newItem, { where: { id: id } });
};

const remove = async (id) => {
    return await Articulo.destroy({ where: { id: id } });
};

module.exports = {
    getAll,
    getOne,
    post,
    put,
    patch,
    remove,
};
