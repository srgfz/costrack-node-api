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
Comercial.hasMany(Gasto, { onDelete: "CASCADE" })
Gasto.belongsTo(Comercial)

Comercial.hasMany(Pedido, { onDelete: "CASCADE" })
Pedido.belongsTo(Comercial)

Cliente.hasMany(Pedido, { onDelete: "CASCADE" })
Pedido.belongsTo(Cliente)

Pedido.hasMany(PedidoLinea, { onDelete: "CASCADE" })
PedidoLinea.belongsTo(Pedido)

Articulo.hasMany(PedidoLinea, { onDelete: "CASCADE" })
PedidoLinea.belongsTo(Articulo)

Proveedor.hasMany(Articulo, { onDelete: "CASCADE" })
Articulo.belongsTo(Proveedor)

Empresa.hasMany(Comercial, { onDelete: "CASCADE" })
Comercial.belongsTo(Empresa)

Empresa.hasMany(Articulo, { onDelete: "CASCADE" })
Articulo.belongsTo(Empresa)

Empresa.hasMany(Cliente, { onDelete: "CASCADE" })
Cliente.belongsTo(Empresa)


Empresa.belongsTo(User)
User.hasOne(Empresa, { onDelete: "CASCADE" })


Comercial.belongsTo(User)
User.hasOne(Comercial, { onDelete: "CASCADE" })


