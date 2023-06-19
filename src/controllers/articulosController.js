const articulosService = require("../services/articulosService");

// Obtiene todos los artículos
const getAll = async (req, res) => {
    res.json(await articulosService.getAll());
};

// Obtiene un artículo por su ID
const getOne = async (req, res) => {
    res.json(await articulosService.getOne(req.params.id));
};

// Crea un nuevo artículo
const post = async (req, res) => {
    await articulosService.post(req.body);
    res.status(200).json(req.body);
};

// Actualiza un artículo existente por su ID
const put = async (req, res) => {
    await articulosService.put(req.body, req.params.id);
    res.status(200).json(req.body);
};

// Actualiza parcialmente un artículo existente por su ID
const patch = async (req, res) => {
    await articulosService.put(req.body, req.params.id);
    res.status(200).json(req.body);
};

// Elimina un artículo por su ID
const remove = async (req, res) => {
    await articulosService.remove(req.params.id);
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
