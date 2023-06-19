// Importamos el modelo de componente:
const Proveedor = require("../models/Proveedor")

// Obtiene todos los proveedores
const getAll = async () => {
    try {
        const all = await Proveedor.findAll()
        return all
    }
    catch (error) {
        return error
    }
}

// Obtiene un proveedor específico basado en su ID
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

// Crea un nuevo proveedor
const post = async (newItem) => {
    try {
        return await Proveedor.create(newItem);
    }
    catch (error) {
        return error
    }
}

// Actualiza los datos de un proveedor
const put = async (newItem, id) => {
    return await Proveedor.update(newItem, { where: { id } })
};

// Actualiza parcialmente los datos de un proveedor
const patch = async (newItem, id) => {
    return await Proveedor.patch(newItem, { where: { id: id } });
};

// Elimina un proveedor
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
