const clientesService = require("../services/clientesService");

// Obtiene todos los clientes
const getAll = async (req, res) => {
    res.json(await clientesService.getAll());
};

// Obtiene un cliente por su ID
const getOne = async (req, res) => {
    res.json(await clientesService.getOne(req.params.id));
};

// Crea un nuevo cliente
const post = async (req, res) => {
    await clientesService.post(req.body);
    res.status(200).json(req.body);
};

// Actualiza un cliente existente por su ID
const put = async (req, res) => {
    await clientesService.put(req.body, req.params.id);
    res.status(200).json(req.body);
};

// Actualiza parcialmente un cliente existente por su ID
const patch = async (req, res) => {
    await clientesService.put(req.body, req.params.id);
    res.status(200).json(req.body);
};

// Elimina un cliente por su ID
const remove = async (req, res) => {
    await clientesService.remove(req.params.id);
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
