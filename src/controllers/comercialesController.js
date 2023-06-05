const comercialesService = require("../services/comercialesService")

const getAll = async (req, res) => {

    res.json(await comercialesService.getAll())
}

const getOne = async (req, res) => {
    res.json(await comercialesService.getOne(req.params.id))
}

const getBills = async (req, res) => {
    res.json(await comercialesService.getBills(req.params.id))
}

const getOrders = async (req, res) => {
    res.json(await comercialesService.getOrders(req.params.id))
}

const post = async (req, res) => {
    await comercialesService.post(req.body)
    res.status(200).json(req.body)
}

const put = async (req, res) => {
    await comercialesService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const patch = async (req, res) => {
    await comercialesService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const remove = async (req, res) => {
    await comercialesService.remove(req.params.id)
    res.status(200).json(req.params.id + " Eliminado")
}

module.exports = {
    getAll,
    getOne,
    getBills,
    getOrders,
    post,
    remove,
    put,
    patch,
}