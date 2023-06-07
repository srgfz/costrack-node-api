const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

// Metadata info de la api
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Costrack API",
            version: "v1.0.0",
            description: `Documentación de la API Costrack \n\n [GitHub](https://github.com/srgfz)  |  [LinkedIn](https://www.linkedin.com/in/srgfz/) \n \n \tBack-end utilizado para el Proyecto final de DAW \n \n \t Autor: Sergio Fernández Nevado \n \n \t IES Ribera del Tajo | 2023`,
            author: "asdfer",
            contact: {
                name: " to Sergio Fernández",
                email: "fernandezsergio10@gmail.com"
            }
        },
    },
    apis: [path.join(__dirname, "../../routes/**/*.js")], // Ruta a todos los archivos de enrutadores en tu proyecto
};

// Documentación en formato JSON
const swaggerSpec = swaggerJSDoc(options);

// Ruta de la documentación
const swaggerDocs = (app, port) => {
    app.use("/costrack/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get("/costrack/api/v1/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec); // Utiliza "send" en lugar de "rend" para enviar el JSON
    });
    console.log(`Documentación de la api en http://localhost:${port}/costrack/api/v1/docs}`);
};

module.exports = { swaggerDocs };
