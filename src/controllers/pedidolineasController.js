const pedidolineasService = require("../services/pedidolineasService");

// Obtiene todas las líneas de pedido
const getAll = async (req, res) => {
    res.json(await pedidolineasService.getAll());
};

// Obtiene una línea de pedido por su ID
const getOne = async (req, res) => {
    res.json(await pedidolineasService.getOne(req.params.id));
};

// Crea una nueva línea de pedido
const post = async (req, res) => {
    await pedidolineasService.post(req.body);
    res.status(200).json(req.body);
};

// Actualiza una línea de pedido existente por su ID
const put = async (req, res) => {
    await pedidolineasService.put(req.body, req.params.id);
    res.status(200).json(req.body);
};

// Actualiza parcialmente una línea de pedido existente por su ID
const patch = async (req, res) => {
    await pedidolineasService.put(req.body, req.params.id);
    res.status(200).json(req.body);
};

// Elimina una línea de pedido por su ID
const remove = async (req, res) => {
    await pedidolineasService.remove(req.params.id);
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
