//Importamos el modelo de componente:
const User = require("../models/User")
const Comercial = require("../models/Comercial")
const Empresa = require("../models/Empresa")


const sequalize = require("../db/db")
const bcryptjs = require('bcryptjs');
const jwt = require('jwt-simple')
const moment = require('moment')

const getAll = async () => {
    return await User.findAll()
}

const getOne = async (id) => {
    return await User.findOne({
        where: {
            id: id,
        },
        include: [
            {
                model: Cassette,
                include: {
                    model: Muestra,
                },
            },
            {
                model: Muestra,
            },
        ]
    })
}

const getInfo = async (email) => {
    return await User.findOne({
        where: {
            email: email,
        },
        attributes: ["id", "nombre", "apellidos", "curso", "centro", "email"],
    })
}


const createToken = (user) => {
    const payload = {
        id: user.id,//id
        rol: user.rol,//rol
        createdAt: moment().unix(),//Fecha de creación
        expiredAt: moment().add(8, "hours").unix()//Duración
    }
    return jwt.encode(payload, "Frase para probar .env")
    //Este token lo recibiré en cliente y lo guardaré (en localStorage)
}

const login = async (body) => {
    //Si alguno de los campos está vacío
    if (typeof body === 'undefined' || typeof body.password === 'undefined' || typeof body.email === 'undefined') {
        return { error: "Debe introducir un email y una contraseña" };
    }
    const user = await User.findOne({
        where: {
            email: body.email,
        },
    });
    if (user) {
        if (bcryptjs.compareSync(body.password, user.password)) {//Login correcto
            return { token: createToken(user) }//Si el login es correcto creamos y devolvemos el token para ese usuario
        } else {//Contraseña incorrecta
            return { error: "Login fallido 2" };
        }
    } else {//El user no existe (email incorrecto)
        return { error: "Login fallido 1" };
    }
}

const post = async (newItem) => {
    try {
        const user = await User.create({
            email: newItem.email,
            rol: newItem.rol,
            password: bcryptjs.hashSync(newItem.password, 10),
        });
        if (newItem.cif) {
            //Si es empresa
            return await Empresa.create({
                cif: newItem.cif,
                nombre: newItem.nombre,
                direccion: newItem.direccion,
                userId: user.id
            });
        } else {
            //Si es comercial
            return await Comercial.create({
                dni: newItem.dni,
                nombre: newItem.nombre,
                apellidos: newItem.apellidos,
                imagen: newItem.imagen,
                userId: user.id,
                empresaId: newItem.empresaId
            });
        }
    }
    catch (error) {
        return error
    }
}

const put = async (newItem, id) => {
    return await User.update(newItem, { where: { id } })
};

const patch = async (newItem, id) => {
    return await User.patch(newItem, { where: { id: id } });
};

const remove = async (id) => {
    return await User.destroy({ where: { id: id } });
};

module.exports = {
    getAll,
    getOne,
    getInfo,
    login,
    post,
    put,
    patch,
    remove,
};
