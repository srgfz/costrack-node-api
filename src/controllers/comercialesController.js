const comercialesService = require("../services/comercialesService");

// Obtiene todos los comerciales
const getAll = async (req, res) => {
    res.json(await comercialesService.getAll());
};

// Obtiene un comercial por su ID
const getOne = async (req, res) => {
    res.json(await comercialesService.getOne(req.params.id));
};

// Obtiene las facturas de un comercial por su ID y un rango de fechas
const getBills = async (req, res) => {
    if (req.query.date1 && req.query.date2) {
        res.json(await comercialesService.getBillsByDates(req.params.id, `${req.query.date1} 00:00:01`, `${req.query.date2} 23:59:59`));
    } else {
        res.json(await comercialesService.getBills(req.params.id));
    }
};

// Obtiene los pedidos de un comercial por su ID y un rango de fechas
const getOrders = async (req, res) => {
    if (req.query.date1 && req.query.date2) {
        res.json(await comercialesService.getOrdersByDates(req.params.id, `${req.query.date1} 00:00:01`, `${req.query.date2} 23:59:59`));
    } else {
        res.json(await comercialesService.getOrders(req.params.id));
    }
};

// Crea un nuevo comercial
const post = async (req, res) => {
    await comercialesService.post(req.body);
    res.status(200).json(req.body);
};

// Actualiza un comercial existente por su ID
const put = async (req, res) => {
    await comercialesService.put(req.body, req.params.id);
    res.status(200).json(req.body);
};

// Actualiza parcialmente un comercial existente por su ID
const patch = async (req, res) => {
    await comercialesService.patch(req.body, req.params.id);
    res.status(200).json(req.body);
};

// Elimina un comercial por su ID
const remove = async (req, res) => {
    await comercialesService.remove(req.params.id);
    res.status(200).json(req.params.id + " Eliminado");
};

// Exporta las funciones como un objeto para su uso en otros módulos
module.exports = {
    getAll,
    getOne,
    getBills,
    getOrders,
    post,
    remove,
    put,
    patch,
};
