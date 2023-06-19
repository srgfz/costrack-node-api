const Cliente = require("../models/Cliente");
const { Op } = require("sequelize");

const getAll = async () => {
    try {
        const all = await Cliente.findAll();
        return all;
    } catch (error) {
        return error;
    }
};

const getOne = async (id) => {
    try {
        return await Cliente.findOne({
            where: {
                id: id,
            },
        });
    } catch (error) {
        return error;
    }
};

const getByName = async (searchInput) => {
    try {
        return await Cliente.findAll({
            where: sequelize.where(
                sequelize.fn("lower", sequelize.col("nombre")),
                {
                    [Op.iLike]: `%${searchInput.toLowerCase()}%`,
                }
            ),
        });
    } catch (error) {
        return error;
    }
};

const post = async (newItem) => {
    try {
        return await Cliente.create(newItem);
    } catch (error) {
        return error;
    }
};

const put = async (newItem, id) => {
    return await Cliente.update(newItem, { where: { id } });
};

const patch = async (newItem, id) => {
    return await Cliente.patch(newItem, { where: { id: id } });
};

const remove = async (id) => {
    return await Cliente.destroy({ where: { id: id } });
};

module.exports = {
    getAll,
    getOne,
    getByName,
    post,
    put,
    patch,
    remove,
};
