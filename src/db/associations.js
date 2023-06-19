const Gasto = require("../models/Gasto");
const User = require("../models/User");
const Comercial = require("../models/Comercial");
const Empresa = require("../models/Empresa");
const Pedido = require("../models/Pedido");
const Cliente = require("../models/Cliente");
const PedidoLinea = require("../models/PedidoLinea");
const Articulo = require("../models/Articulo");
const Proveedor = require("../models/Proveedor");

// Relación 1 a N: Un Comercial puede tener muchos Gastos
Comercial.hasMany(Gasto, { onDelete: "CASCADE" });
Gasto.belongsTo(Comercial);

// Relación 1 a N: Un Comercial puede tener muchos Pedidos
Comercial.hasMany(Pedido, { onDelete: "CASCADE" });
Pedido.belongsTo(Comercial);

// Relación 1 a N: Un Cliente puede tener muchos Pedidos
Cliente.hasMany(Pedido, { onDelete: "CASCADE" });
Pedido.belongsTo(Cliente);

// Relación 1 a N: Un Pedido puede tener muchas Líneas de Pedido
Pedido.hasMany(PedidoLinea, { onDelete: "CASCADE" });
PedidoLinea.belongsTo(Pedido);

// Relación 1 a N: Un Artículo puede estar en muchas Líneas de Pedido
Articulo.hasMany(PedidoLinea, { onDelete: "CASCADE" });
PedidoLinea.belongsTo(Articulo);

// Relación 1 a N: Un Proveedor puede tener muchos Artículos
Proveedor.hasMany(Articulo, { onDelete: "CASCADE" });
Articulo.belongsTo(Proveedor);

// Relación 1 a N: Una Empresa puede tener muchos Comerciales
Empresa.hasMany(Comercial, { onDelete: "CASCADE" });
Comercial.belongsTo(Empresa);

// Relación 1 a N: Una Empresa puede tener muchos Artículos
Empresa.hasMany(Articulo, { onDelete: "CASCADE" });
Articulo.belongsTo(Empresa);

// Relación 1 a N: Una Empresa puede tener muchos Clientes
Empresa.hasMany(Cliente, { onDelete: "CASCADE" });
Cliente.belongsTo(Empresa);

// Relación 1 a 1: Una Empresa pertenece a un User y un User tiene una Empresa
Empresa.belongsTo(User);
User.hasOne(Empresa, { onDelete: "CASCADE" });

// Relación 1 a 1: Un Comercial pertenece a un User y un User tiene un Comercial
Comercial.belongsTo(User);
User.hasOne(Comercial, { onDelete: "CASCADE" });
