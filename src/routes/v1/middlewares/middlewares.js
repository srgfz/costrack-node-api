const jwt = require('jwt-simple')
const moment = require('moment')
const Comercial = require("./../../../models/Comercial");
const Cliente = require('../../../models/Cliente');
const Empresa = require('../../../models/Empresa');

// Middleware para permitir los headers específicos
const allowHeaders = (req, res, next) => {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, key");
}

// Middleware para verificar el token
const checkToken = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");

    const token = req.headers["key"]; // "key" es la clave donde se encuentra el token en los headers
    let playload = {};

    if (!token) {
        return res.status(401).json({ error: "no-auth" }); // No se proporcionó ningún token
    }
    try {
        playload = jwt.decode(token, "Frase para probar .env"); // Decodificar el token
        if (playload.expiredAt < moment().unix()) { // Verificar si el token ha expirado
            return res.status(401).json({ error: "no-auth" });
        }
        if (playload.rol !== 1 && playload.rol !== 0) { // Verificar el rol del usuario
            return res.status(401).json({ error: "no-auth" });
        }
    } catch (error) {
        return res.status(401).json({ error: "no-auth" }); // El token no coincide
    }
    next();
}

// Middleware para verificar el rol de comercial
const checkComercialRol = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");
    const token = req.headers["key"];
    let playload = {};

    try {
        playload = jwt.decode(token, "Frase para probar .env");

        if (playload.rol !== 0) {
            return res.status(401).json({ error: "no-auth" });
        }
    } catch (error) {
        return res.status(401).json({ error: "Ha ocurrido un error en el servidor" });
    }
    next();
}

// Middleware para verificar el rol de empresa
const checkEmpresaRol = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");
    const token = req.headers["key"];
    let playload = {};

    try {
        playload = jwt.decode(token, "Frase para probar .env");

        if (playload.rol !== 1) {
            return res.status(401).json({ error: "no-auth" });
        }
    } catch (error) {
        return res.status(401).json({ error: "Ha ocurrido un error en el servidor" });
    }
    next();
}

// Middleware para verificar el ID
const checkId = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");
    const token = req.headers["key"];
    let playload = {};
    try {
        playload = jwt.decode(token, "Frase para probar .env");
        if (playload.rol === 1 && playload.idEmpresa != req.params.id) { // Verificar el ID de la petición y el del token
            return res.status(401).json({ error: "no-auth" });
        }
        if (playload.rol === 0 && playload.idComercial != req.params.id) { // Verificar el ID de la petición y el del token
            return res.status(401).json({ error: "no-auth" });
        }
    } catch (error) {
        return res.status(401).json({ error: "Ha ocurrido un error en el servidor" });
    }
    next();
}

// Middleware para verificar la empresa y el ID de la empresa
const checkEmpresaAndIdEmpresa = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");
    const token = req.headers["key"];
    let playload = {};
    try {
        playload = jwt.decode(token, "Frase para probar .env");
        if (playload.rol === 1 && playload.idEmpresa != req.params.id) { // Verificar si es empresa y es su ID
            return res.status(401).json({ error: "no-auth" });
        }
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: "Ha ocurrido un error en el servidor" });
    }
    next();
}

// Middleware para verificar el comercial y el ID del comercial
const checkComercialAndIdComercial = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");
    const token = req.headers["key"];
    let playload = {};
    try {
        playload = jwt.decode(token, "Frase para probar .env");
        if (playload.rol === 0 && playload.idComercial != req.params.id) { // Verificar si es comercial y es su ID
            return res.status(401).json({ error: "no-auth" });
        }
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: "Ha ocurrido un error en el servidor" });
    }
    next();
}

// Middleware para verificar al empleado
const checkEmployee = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");
    const token = req.headers["key"];
    let playload = {};
    try {
        playload = jwt.decode(token, "Frase para probar .env");
        if (playload.rol === 0 && playload.idEmpresa != req.params.id) { // Verificar el ID de la empresa para la que trabaja
            return res.status(401).json({ error: "no-auth" });
        }
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: "Ha ocurrido un error en el servidor" });
    }
    next();
}

// Middleware para verificar la empresa
const checkEmpresa = async (req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");
    const token = req.headers["key"];
    let playload = {};
    try {
        playload = jwt.decode(token, "Frase para probar .env");
        if (playload.rol === 1) {
            // Verificar si la empresa es propietaria del comercial
            const comercial = await Comercial.findOne({
                where: {
                    id: req.params.id,
                    empresaId: playload.idEmpresa // Suponiendo que hay una columna llamada empresaId en tu modelo Comercial que almacena el ID de la empresa
                }
            });
            if (!comercial) {
                return res.status(401).json({ error: "no-auth0" });
            }
        }
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: "Ha ocurrido un error en el servidor" });
    }
    next();
}

// Middleware para verificar la empresa y el cliente
const checkEmpresaClient = async (req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");
    const token = req.headers["key"];
    let playload = {};
    try {
        playload = jwt.decode(token, "Frase para probar .env");
        if (playload.rol === 1) {
            // Verificar si la empresa es propietaria del cliente
            const cliente = await Cliente.findOne({
                where: {
                    id: req.params.id,
                    empresaId: playload.idEmpresa // Suponiendo que hay una columna llamada empresaId en tu modelo cliente que almacena el ID de la empresa
                }
            });
            if (!cliente) {
                return res.status(401).json({ error: "no-auth0" });
            }
        }
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: "Ha ocurrido un error en el servidor" });
    }
    next();
}

// Middleware para verificar el nuevo elemento
const checkNewItem = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");
    const token = req.headers["key"];
    let playload = {};
    try {
        playload = jwt.decode(token, "Frase para probar .env");
        // Verificar si la empresa que añade el comercial está vinculándolo a ella misma
        if (playload.idEmpresa !== req.body.empresaId) {
            return res.status(401).json({ error: "no-auth0" });
        }
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: "Ha ocurrido un error en el servidor" });
    }
    next();
}

// Middleware para verificar el CIF y el DNI
const checkCifAndDni = async (req, res, next) => {
    try {
        if (req.body.dni) {
            const comercial = await Comercial.findOne({
                where: {
                    dni: req.body.dni,
                }
            });
            if (comercial) {
                return res.status(401).json({ error: "Ya hay un comercial con ese DNI" });
            }
        } else {
            const empresa = await Empresa.findOne({
                where: {
                    cif: req.body.cif,
                }
            });
            if (empresa) {
                return res.status(401).json({ error: "La empresa ya está registrada" });
            }
        }
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: "Ha ocurrido un error en el servidor" });
    }
    next();
}

module.exports = {
    allowHeaders,
    checkToken,
    checkComercialRol,
    checkEmpresaRol,
    checkId,
    checkEmpresaAndIdEmpresa,
    checkEmployee,
    checkEmpresa,
    checkComercialAndIdComercial,
    checkEmpresaClient,
    checkNewItem,
    checkCifAndDni
};
