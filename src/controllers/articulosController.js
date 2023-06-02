const articulosService = require("../services/articulosService")

const getAll = async (req, res) => {

    res.json(await articulosService.getAll())
}

const getOne = async (req, res) => {
    res.json(await articulosService.getOne(req.params.id))
}


const post = async (req, res) => {
    await articulosService.post(req.body)
    res.status(200).json(req.body)
}

const put = async (req, res) => {
    await articulosService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const patch = async (req, res) => {
    await articulosService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const remove = async (req, res) => {
    await articulosService.remove(req.params.id)
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