const pedidosService = require("../services/pedidosService")

const getAll = async (req, res) => {

    res.json(await pedidosService.getAll())
}

const getOne = async (req, res) => {
    res.json(await pedidosService.getOne(req.params.id))
}


const post = async (req, res) => {
    await pedidosService.post(req.body)
    res.status(200).json(req.body)
}

const put = async (req, res) => {
    await pedidosService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const patch = async (req, res) => {
    await pedidosService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const remove = async (req, res) => {
    await pedidosService.remove(req.params.id)
    res.status(200).json(req.params.id + " Eliminado")
}

module.exports = {
    getAll,
    getOne,
    post,
    remove,
    put,
    patch,
}