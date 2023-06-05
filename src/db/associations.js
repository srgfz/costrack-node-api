const Gasto = require("../models/Gasto")
const User = require("../models/User")
const Comercial = require("../models/Comercial")
const Empresa = require("../models/Empresa")
const Pedido = require("../models/Pedido")
const Cliente = require("../models/Cliente")
const PedidoLinea = require("../models/PedidoLinea")
const Articulo = require("../models/Articulo")
const Proveedor = require("../models/Proveedor")



//Relación 1 a N:
Comercial.hasMany(Gasto)
Gasto.belongsTo(Comercial)

Comercial.hasMany(Pedido)
Pedido.belongsTo(Comercial)

Cliente.hasMany(Pedido)
Pedido.belongsTo(Cliente)

Pedido.hasMany(PedidoLinea)
PedidoLinea.belongsTo(Pedido)

Articulo.hasMany(PedidoLinea)
PedidoLinea.belongsTo(Articulo)

Proveedor.hasMany(Articulo)
Articulo.belongsTo(Proveedor)

Empresa.hasMany(Comercial)
Comercial.belongsTo(Empresa)


Empresa.belongsTo(User)

Comercial.belongsTo(User)

