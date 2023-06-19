const proveedoresService = require("../services/proveedoresService");

// Obtiene todos los proveedores
const getAll = async (req, res) => {
    res.json(await proveedoresService.getAll());
};

// Obtiene un proveedor por su ID
const getOne = async (req, res) => {
    res.json(await proveedoresService.getOne(req.params.id));
};

// Crea un nuevo proveedor
const post = async (req, res) => {
    await proveedoresService.post(req.body);
    res.status(200).json(req.body);
};

// Actualiza un proveedor existente por su ID
const put = async (req, res) => {
    await proveedoresService.put(req.body, req.params.id);
    res.status(200).json(req.body);
};

// Actualiza parcialmente un proveedor existente por su ID
const patch = async (req, res) => {
    await proveedoresService.put(req.body, req.params.id);
    res.status(200).json(req.body);
};

// Elimina un proveedor por su ID
const remove = async (req, res) => {
    await proveedoresService.remove(req.params.id);
    res.status(200).json(req.params.id + " Eliminado");
};

// Exporta las funciones como un objeto para su uso en otros módulos
module.exports = {
    getAll,
    getOne,
    post,
    remove,
    put,
    patch,
};
