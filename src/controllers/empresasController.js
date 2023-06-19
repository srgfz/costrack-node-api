const empresasService = require("../services/empresasService");

// Obtiene todas las empresas
const getAll = async (req, res) => {
    res.json(await empresasService.getAll());
};

// Obtiene los clientes de una empresa por su ID
const getClients = async (req, res) => {
    if (req.query.q) {
        res.json(await empresasService.getClientsByName(req.params.id, req.query.q));
    } else {
        res.json(await empresasService.getClients(req.params.id));
    }
};

// Obtiene los productos de una empresa por su ID
const getProducts = async (req, res) => {
    if (req.query.q) {
        res.json(await empresasService.getProductsByName(req.params.id, req.query.q));
    } else {
        res.json(await empresasService.getProducts(req.params.id));
    }
};

// Obtiene los comerciales de una empresa por su ID
const getCommercial = async (req, res) => {
    if (req.query.date1 && req.query.date2) {
        res.json(await empresasService.getCommercialByDates(req.params.id, `${req.query.date1} 00:00:01`, `${req.query.date2} 23:59:59`));
    } else if (req.query.q) {
        res.json(await empresasService.getComercialByName(req.params.id, req.query.q));
    } else {
        res.json(await empresasService.getCommercial(req.params.id));
    }
};

// Obtiene una empresa por su ID
const getOne = async (req, res) => {
    res.json(await empresasService.getOne(req.params.id));
};

// Crea una nueva empresa
const post = async (req, res) => {
    await empresasService.post(req.body);
    res.status(200).json(req.body);
};

// Actualiza una empresa existente por su ID
const put = async (req, res) => {
    await empresasService.put(req.body, req.params.id);
    res.status(200).json(req.body);
};

// Actualiza parcialmente una empresa existente por su ID
const patch = async (req, res) => {
    await empresasService.patch(req.body, req.params.id);
    res.status(200).json(req.body);
};

// Elimina una empresa por su ID
const remove = async (req, res) => {
    await empresasService.remove(req.params.id);
    res.status(200).json(req.params.id + " Eliminado");
};

// Exporta las funciones como un objeto para su uso en otros módulos
module.exports = {
    getAll,
    getClients,
    getProducts,
    getCommercial,
    getOne,
    post,
    remove,
    put,
    patch,
};
