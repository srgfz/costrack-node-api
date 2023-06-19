// Importamos el modelo de componente:
const User = require("../models/User")
const Comercial = require("../models/Comercial")
const Empresa = require("../models/Empresa")

const sequalize = require("../db/db")
const bcryptjs = require('bcryptjs');
const jwt = require('jwt-simple')
const moment = require('moment')

// Obtiene todos los usuarios registrados en el sistema
const getAll = async () => {
    return await User.findAll({ attributes: ["id", "email", "rol", "createdAt", "updatedAt"] })
}

// Obtiene un usuario específico basado en su ID
const getOne = async (id) => {
    return await User.findOne({
        where: {
            id: id,
        },
        attributes: ["id", "email", "rol", "createdAt", "updatedAt"]
    })
}

// Obtiene la información de un usuario específico basado en su correo electrónico
const getInfo = async (email) => {
    return await User.findOne({
        where: {
            email: email,
        },
        attributes: ["id", "email", "rol", "createdAt", "updatedAt"]
    })
}

// Crea un token de autenticación para el usuario
const createToken = (user) => {
    if (user.rol === 1) {
        const payload = {
            userId: user.id, // ID del usuario
            idEmpresa: user.empresa.id, // ID de la empresa asociada al usuario
            rol: user.rol, // Rol del usuario
            createdAt: moment().unix(), // Fecha de creación del token
            expiredAt: moment().add(8, "hours").unix(), // Fecha de expiración del token
            email: user.email, // Correo electrónico del usuario
        }
        return jwt.encode(payload, "Frase para probar .env")
        // Este token lo recibirá el cliente y se almacenará en el localStorage
    }
    const payload = {
        userId: user.id, // ID del usuario
        idComercial: user.comercial.id, // ID del comercial asociado al usuario
        idEmpresa: user.comercial.empresaId, // ID de la empresa asociada al comercial
        rol: user.rol, // Rol del usuario
        createdAt: moment().unix(), // Fecha de creación del token
        expiredAt: moment().add(8, "hours").unix(), // Fecha de expiración del token
        email: user.email, // Correo electrónico del usuario
    }
    return jwt.encode(payload, "Frase para probar .env")
    // Este token lo recibirá el cliente y se almacenará en el localStorage
}

// Realiza el inicio de sesión del usuario
const login = async (body) => {
    // Si alguno de los campos está vacío
    if (typeof body === 'undefined' || typeof body.password === 'undefined' || typeof body.email === 'undefined') {
        return { error: "Debe introducir un email y una contraseña" };
    }
    const user = await User.findOne({
        where: {
            email: body.email
        },
        include: [
            {
                model: Comercial,
                attributes: ["id", "empresaId"]
            },
            {
                model: Empresa,
                attributes: ["id"]
            }
        ]
    });
    if (user) {
        if (bcryptjs.compareSync(body.password, user.password)) {
            // La contraseña es correcta, se procede con el inicio de sesión
            return { token: createToken(user) }
            // Si el inicio de sesión es correcto, se crea y devuelve el token para ese usuario
        } else {
            // Contraseña incorrecta
            return { error: "Contraseña y/o email incorrectos" };
        }
    } else {
        // El usuario no existe (email incorrecto)
        return { error: "Contraseña y/o email incorrectos" };
    }
}

// Crea un nuevo usuario
const post = async (newItem) => {
    try {
        const user = await User.create({
            email: newItem.email,
            rol: newItem.rol,
            password: bcryptjs.hashSync(newItem.password, 10),
        });
        if (newItem.cif) {
            // Si es una empresa
            await Empresa.create({
                cif: newItem.cif,
                nombre: newItem.nombre,
                direccion: newItem.direccion,
                userId: user.id
            });
            return await login(newItem)
        } else {
            // Si es un comercial
            return await Comercial.create({
                dni: newItem.dni,
                nombre: newItem.nombre,
                apellidos: newItem.apellidos,
                userId: user.id,
                empresaId: newItem.empresaId
            });
        }
    } catch (error) {
        return error
    }
}

// Actualiza los datos de un usuario
const put = async (newItem, id) => {
    newItem.password = bcryptjs.hashSync(newItem.password, 10)
    return await User.update(newItem, { where: { id } })
};

// Actualiza parcialmente los datos de un usuario
const patch = async (newItem, id) => {
    newItem.password = bcryptjs.hashSync(newItem.password, 10)
    return await User.patch(newItem, { where: { id: id } });
};

// Elimina un usuario
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
