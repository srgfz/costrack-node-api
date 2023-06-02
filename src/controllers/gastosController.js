const gastosService = require("../services/gastosService")

const getAll = async (req, res) => {

    res.json(await gastosService.getAll())
}

const getOne = async (req, res) => {
    res.json(await gastosService.getOne(req.params.id))
}


const post = async (req, res) => {
    await gastosService.post(req.body)
    res.status(200).json(req.body)
}

const put = async (req, res) => {
    await gastosService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const patch = async (req, res) => {
    await gastosService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const remove = async (req, res) => {
    await gastosService.remove(req.params.id)
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