const proveedoresService = require("../services/proveedoresService")

const getAll = async (req, res) => {

    res.json(await proveedoresService.getAll())
}

const getOne = async (req, res) => {
    res.json(await proveedoresService.getOne(req.params.id))
}


const post = async (req, res) => {
    await proveedoresService.post(req.body)
    res.status(200).json(req.body)
}

const put = async (req, res) => {
    await proveedoresService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const patch = async (req, res) => {
    await proveedoresService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const remove = async (req, res) => {
    await proveedoresService.remove(req.params.id)
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