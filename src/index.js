const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();

const apiRoutesV1 = require("./routes/v1/apiRouter");

// Importamos la base de datos (DB):
const sequelize = require("./db/db");
// Importamos las relaciones de la base de datos:
require("./db/associations")

// Importamos la documentación de Swagger
const { swaggerDocs: v1SwaggerDocs } = require("./routes/v1/swagger")

// Convertir los datos que nos envían a formato JSON para los métodos POST, PUT, PATCH...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(function (req, res, next) {
    // Especificamos las cabeceras CORS a enviar
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Methods',
        'POST, PUT, PATCH, GET, DELETE, OPTIONS',
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization, key',
    );
    next();
});

// Conexión con MySQL
app.use("/costrack", apiRoutesV1);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
    // Documentación Swagger
    v1SwaggerDocs(app, PORT)
    // Conexión con MySQL
    sequelize
        .sync({ force: false })
        .then(() => console.log("Tablas sincronizadas"));
});
