const clientesService = require("../services/clientesService")

const getAll = async (req, res) => {

    res.json(await clientesService.getAll())
}

const getOne = async (req, res) => {
    res.json(await clientesService.getOne(req.params.id))
}


const post = async (req, res) => {
    await clientesService.post(req.body)
    res.status(200).json(req.body)
}

const put = async (req, res) => {
    await clientesService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const patch = async (req, res) => {
    await clientesService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const remove = async (req, res) => {
    await clientesService.remove(req.params.id)
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