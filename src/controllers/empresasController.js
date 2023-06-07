const empresasService = require("../services/empresasService")

const getAll = async (req, res) => {
    res.json(await empresasService.getAll())
}

const getClients = async (req, res) => {
    if (req.query.q) {
        res.json(await empresasService.getClientsByName(req.params.id, req.query.q))
    } else {
        res.json(await empresasService.getClients(req.params.id))
    }
}

const getProducts = async (req, res) => {
    if (req.query.q) {
        res.json(await empresasService.getProductsByName(req.params.id, req.query.q))
    } else {
        res.json(await empresasService.getProducts(req.params.id))
    }
}

const getCommercial = async (req, res) => {
    if (req.query.date1 && req.query.date2) {
        res.json(await empresasService.getCommercialByDates(req.params.id, req.query.date1, req.query.date2))
    } else if (req.query.q) {
        res.json(await empresasService.getComercialByName(req.params.id, req.query.q))
    } else {
        res.json(await empresasService.getCommercial(req.params.id))
    }
}

const getOne = async (req, res) => {
    res.json(await empresasService.getOne(req.params.id))
}

const post = async (req, res) => {
    await empresasService.post(req.body)
    res.status(200).json(req.body)
}

const put = async (req, res) => {
    await empresasService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const patch = async (req, res) => {
    await empresasService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const remove = async (req, res) => {
    await empresasService.remove(req.params.id)
    res.status(200).json(req.params.id + " Eliminado")
}

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
}