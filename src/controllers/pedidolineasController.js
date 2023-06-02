const pedidolineasService = require("../services/pedidolineasService")

const getAll = async (req, res) => {

    res.json(await pedidolineasService.getAll())
}

const getOne = async (req, res) => {
    res.json(await pedidolineasService.getOne(req.params.id))
}


const post = async (req, res) => {
    await pedidolineasService.post(req.body)
    res.status(200).json(req.body)
}

const put = async (req, res) => {
    await pedidolineasService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const patch = async (req, res) => {
    await pedidolineasService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const remove = async (req, res) => {
    await pedidolineasService.remove(req.params.id)
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