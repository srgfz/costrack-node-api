// Importamos el modelo de componente
const Gasto = require("../models/Gasto");

// Obtiene todos los gastos
const getAll = async () => {
    try {
        const all = await Gasto.findAll();
        return all;
    } catch (error) {
        return error;
    }
};

// Obtiene un gasto específico basado en su ID
const getOne = async (id) => {
    try {
        return await Gasto.findOne({
            where: {
                id: id,
            },
        });
    } catch (error) {
        return error;
    }
};

// Crea un nuevo gasto
const post = async (newItem) => {
    try {
        return await Gasto.create(newItem);
    } catch (error) {
        return error;
    }
};

// Actualiza los datos de un gasto
const put = async (newItem, id) => {
    return await Gasto.update(newItem, { where: { id } });
};

// Actualiza parcialmente los datos de un gasto
const patch = async (newItem, id) => {
    return await Gasto.patch(newItem, { where: { id: id } });
};

// Elimina un gasto
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
