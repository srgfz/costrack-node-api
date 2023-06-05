const usersService = require("../services/usersService")

const getAll = async (req, res) => {
    res.json(await usersService.getAll())
}

const getOne = async (req, res) => {
    res.json(await usersService.getOne(req.params.id))
}

const getInfo = async (req, res) => {
    res.json(await usersService.getInfo(req.params.email))
}

const login = async (req, res) => {
    res.json(await usersService.login(req.body))
}

const postEmpresa = async (req, res) => {
    const resp = await usersService.post(req.body)
    if (resp.name === "SequelizeUniqueConstraintError") {
        res.status(200).json({ error: "Los datos introducidos ya están vinculados a una cuenta, por favor, si desea entrar en la web inicie sesión con su cuenta" })
    } else {
        res.status(200).json(resp)
    }
}

const postComercial = async (req, res) => {
    const resp = await usersService.post(req.body)
    if (resp.name === "SequelizeUniqueConstraintError") {
        res.status(200).json({ error: "Los datos introducidos ya están vinculados a una cuenta, por favor, si desea entrar en la web inicie sesión con su cuenta" })
    } else {
        res.status(200).json(resp)
    }
}

const put = (req, res) => {
    usersService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const patch = (req, res) => {
    usersService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const remove = async (req, res) => {
    await res.json(usersService.remove(req.params.id))
}

module.exports = {
    getAll,
    getOne,
    getInfo,
    login,
    postEmpresa,
    postComercial,
    remove,
    put,
    patch,
}