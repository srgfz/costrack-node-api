
const jwt = require('jwt-simple')
const moment = require('moment')
const Comercial = require("./../../../models/Comercial");
const Cliente = require('../../../models/Cliente');
const Empresa = require('../../../models/Empresa');



const allowHeaders = (req, res, next) => {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, key");

}


const checkToken = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");

    const token = req.headers["key"]//headers es un array y localizo su clave
    let playload = {}

    if (!token) {//Si no ha puesto ninguna key
        return res.status(401).json({ error: "no-auth" })
    }
    try {//El token es correcto
        playload = jwt.decode(token, "Frase para probar .env")
        if (playload.expiredAt < moment().unix()) {//Si el token ha expirado
            return res.status(401).json({ error: "no-auth" })
        }
        if (playload.rol !== 1 && playload.rol !== 0) { // Verificar el rol
            return res.status(401).json({ error: "no-auth" });
        }
    } catch (error) {//Si el token no coincide
        return res.status(401).json({ error: "no-auth" });
    }
    next()
}

const checkComercialRol = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");
    const token = req.headers["key"]//headers es un array y localizo su clave
    let playload = {}

    try {
        playload = jwt.decode(token, "Frase para probar .env")

        if (playload.rol !== 0) { // Verificar el rol de comercial
            return res.status(401).json({ error: "no-auth" });
        }
    } catch (error) {//Si el token no coincide
        return res.status(401).json({ error: "Ha ocurrido un error en el servidor" });
    }
    next()
}

const checkEmpresaRol = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");
    const token = req.headers["key"]//headers es un array y localizo su clave
    let playload = {}

    try {
        playload = jwt.decode(token, "Frase para probar .env")

        if (playload.rol !== 1) { // Verificar el rol de empresa
            return res.status(401).json({ error: "no-auth" });
        }
    } catch (error) {//Si el token no coincide
        return res.status(401).json({ error: "Ha ocurrido un error en el servidor" });
    }
    next()
}

const checkId = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");
    const token = req.headers["key"]//headers es un array y localizo su clave
    let playload = {}
    try {
        playload = jwt.decode(token, "Frase para probar .env")
        if (playload.rol === 1 && playload.idEmpresa != req.params.id) { // Verificar el id de la petición y el del token
            return res.status(401).json({ error: "no-auth" });
        }
        if (playload.rol === 0 && playload.idComercial != req.params.id) { // Verificar el id de la petición y el del token
            return res.status(401).json({ error: "no-auth" });
        }
    } catch (error) {//Si el token no coincide
        return res.status(401).json({ error: "Ha ocurrido un error en el servidor" });
    }
    next()
}

const checkEmpresaAndIdEmpresa = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");
    const token = req.headers["key"]//headers es un array y localizo su clave
    let playload = {}
    try {
        playload = jwt.decode(token, "Frase para probar .env")
        if (playload.rol === 1 && playload.idEmpresa != req.params.id) { // Verificar que es empresa y es su id
            return res.status(401).json({ error: "no-auth" });
        }
    } catch (error) {//Si el token no coincide
        console.error(error);
        return res.status(401).json({ error: "Ha ocurrido un error en el servidor" });
    }
    next()
}

const checkComercialAndIdComercial = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");
    const token = req.headers["key"]//headers es un array y localizo su clave
    let playload = {}
    try {
        playload = jwt.decode(token, "Frase para probar .env")
        if (playload.rol === 0 && playload.idComercial != req.params.id) { // Verificar que es empresa y es su id
            return res.status(401).json({ error: "no-auth" });
        }
    } catch (error) {//Si el token no coincide
        console.error(error);
        return res.status(401).json({ error: "Ha ocurrido un error en el servidor" });
    }
    next()
}

const checkEmployee = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");
    const token = req.headers["key"]//headers es un array y localizo su clave
    let playload = {}
    try {
        playload = jwt.decode(token, "Frase para probar .env")
        if (playload.rol === 0 && playload.idEmpresa != req.params.id) { // Verificar el id de la empresa para la que trabaja
            return res.status(401).json({ error: "no-auth" });
        }
    } catch (error) {//Si el token no coincide
        console.error(error);
        return res.status(401).json({ error: "Ha ocurrido un error en el servidor" });
    }
    next()
}

const checkEmpresa = async (req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");
    const token = req.headers["key"]//headers es un array y localizo su clave
    let playload = {}
    try {
        playload = jwt.decode(token, "Frase para probar .env")
        if (playload.rol === 1) {
            // Verifica si la empresa es propietaria del comercial
            const comercial = await Comercial.findOne({
                where: {
                    id: req.params.id,
                    empresaId: playload.idEmpresa // Suponiendo que hay una columna llamada empresaId en tu modelo Comercial que almacena el ID de la empresa
                }
            });
            if (!comercial) {
                return res.status(401).json({ error: "no-auth0" })
            }
        }
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: "Ha ocurrido un error en el servidor" });
    }
    next()
}

const checkEmpresaClient = async (req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");
    const token = req.headers["key"]//headers es un array y localizo su clave
    let playload = {}
    try {
        playload = jwt.decode(token, "Frase para probar .env")
        if (playload.rol === 1) {
            // Verifica si la empresa es propietaria del comercial
            const cliente = await Cliente.findOne({
                where: {
                    id: req.params.id,
                    empresaId: playload.idEmpresa // Suponiendo que hay una columna llamada empresaId en tu modelo cliente que almacena el ID de la empresa
                }
            });
            if (!cliente) {
                return res.status(401).json({ error: "no-auth0" })
            }
        }
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: "Ha ocurrido un error en el servidor" });
    }
    next()
}

const checkNewItem = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");
    const token = req.headers["key"]//headers es un array y localizo su clave
    let playload = {}
    try {
        playload = jwt.decode(token, "Frase para probar .env")
        //Verifico si la empresa que añade el comercial está vinculandolo a ella misma
        if (playload.idEmpresa !== req.body.empresaId) {
            return res.status(401).json({ error: "no-auth0" })
        }
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: "Ha ocurrido un error en el servidor" });
    }
    next()
}

const checkCifAndDni = async (req, res, next) => {
    try {
        if (req.body.dni) {
            const comercial = await Comercial.findOne({
                where: {
                    dni: req.body.dni,
                }
            });
            if (comercial) {
                return res.status(401).json({ error: "Ya hay un comercial con ese DNI" })
            }
        } else {
            const empresa = await Empresa.findOne({
                where: {
                    cif: req.body.cif,
                }
            });
            if (empresa) {
                return res.status(401).json({ error: "La empresa ya está registrada" })
            }
        }

    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: "Ha ocurrido un error en el servidor" });
    }
    next()
}


module.exports = {
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
}

