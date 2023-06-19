const usersService = require("../services/usersService");

// Obtiene todos los usuarios
const getAll = async (req, res) => {
    res.json(await usersService.getAll());
};

// Obtiene un usuario por su ID
const getOne = async (req, res) => {
    res.json(await usersService.getOne(req.params.id));
};

// Obtiene la información de un usuario por su email
const getInfo = async (req, res) => {
    res.json(await usersService.getInfo(req.params.email));
};

// Inicia sesión de un usuario
const login = async (req, res) => {
    res.json(await usersService.login(req.body));
};

// Crea una nueva cuenta de empresa
const postEmpresa = async (req, res) => {
    const resp = await usersService.post(req.body);
    if (resp.name === "SequelizeUniqueConstraintError") {
        res.status(200).json({ error: "Los datos introducidos ya están vinculados a una cuenta, por favor, si desea entrar en la web inicie sesión con su cuenta" });
    } else {
        res.status(200).json(resp);
    }
};

// Crea una nueva cuenta de comercial
const postComercial = async (req, res) => {
    const resp = await usersService.post(req.body);
    if (resp.name === "SequelizeUniqueConstraintError") {
        res.status(200).json({ error: "Los datos introducidos ya están vinculados a una cuenta, por favor, si desea entrar en la web inicie sesión con su cuenta" });
    } else {
        res.status(200).json(resp);
    }
};

// Actualiza un usuario existente por su ID
const put = (req, res) => {
    usersService.put(req.body, req.params.id);
    res.status(200).json(req.body);
};

// Actualiza parcialmente un usuario existente por su ID
const patch = (req, res) => {
    usersService.put(req.body, req.params.id);
    res.status(200).json(req.body);
};

// Elimina un usuario por su ID
const remove = async (req, res) => {
    await res.json(usersService.remove(req.params.id));
};

// Exporta las funciones como un objeto para su uso en otros módulos
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
};
