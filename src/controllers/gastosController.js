const gastosService = require("../services/gastosService");

// Obtiene todos los gastos
const getAll = async (req, res) => {
    res.json(await gastosService.getAll());
};

// Obtiene un gasto por su ID
const getOne = async (req, res) => {
    res.json(await gastosService.getOne(req.params.id));
};

// Crea un nuevo gasto
const post = async (req, res) => {
    await gastosService.post(req.body);
    res.status(200).json(req.body);
};

// Actualiza un gasto existente por su ID
const put = async (req, res) => {
    await gastosService.put(req.body, req.params.id);
    res.status(200).json(req.body);
};

// Actualiza parcialmente un gasto existente por su ID
const patch = async (req, res) => {
    await gastosService.put(req.body, req.params.id);
    res.status(200).json(req.body);
};

// Elimina un gasto por su ID
const remove = async (req, res) => {
    await gastosService.remove(req.params.id);
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
