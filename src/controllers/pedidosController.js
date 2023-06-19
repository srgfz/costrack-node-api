const pedidosService = require("../services/pedidosService");

// Obtiene todos los pedidos
const getAll = async (req, res) => {
    res.json(await pedidosService.getAll());
};

// Obtiene un pedido por su ID
const getOne = async (req, res) => {
    res.json(await pedidosService.getOne(req.params.id));
};

// Crea un nuevo pedido
const post = async (req, res) => {
    await pedidosService.post(req.body);
    res.status(200).json(req.body);
};

// Actualiza un pedido existente por su ID
const put = async (req, res) => {
    await pedidosService.put(req.body, req.params.id);
    res.status(200).json(req.body);
};

// Actualiza parcialmente un pedido existente por su ID
const patch = async (req, res) => {
    await pedidosService.put(req.body, req.params.id);
    res.status(200).json(req.body);
};

// Elimina un pedido por su ID
const remove = async (req, res) => {
    await pedidosService.remove(req.params.id);
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
