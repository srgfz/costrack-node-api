//*Configuración de la documentación Swagger
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
        components: {
            securitySchemes: {
                Token: {
                    type: 'apiKey',
                    name: 'key',
                    in: 'header',
                    description: 'API Key required to access the endpoints. Enter it in the format: Bearer YOUR_API_KEY',
                },
            },
        },
        security: [{
            Token: [],
        }],
    },
    apis: [path.join(__dirname, "../../routes/**/*.js")], // Ruta a todos los archivos de enrutadores en tu proyecto
};

// Documentación en formato JSON
const swaggerSpec = swaggerJSDoc(options);

// Ruta de la documentación
const swaggerDocs = (app, port) => {
    const customCss = `
    <style>
      .swagger-ui .topbar .wrapper .topbar-wrapper .link span:nth-child(1)::before {
        content: "🔐";
        margin-right: 0.25rem;
      }
    </style>
  `;

    app.use(
        "/costrack/api/v1/docs",
        swaggerUi.serve,
        swaggerUi.setup(swaggerSpec, {
            customCss,
            customSiteTitle: "Costrack API",
        })
    );

    app.get("/costrack/api/v1/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });

    console.log(`Documentación de la API en http://localhost:${port}/costrack/api/v1/docs`);
};

module.exports = { swaggerDocs };
