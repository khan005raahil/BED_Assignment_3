const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'API documentation for My Project',
    },
    servers: [
      {
        url: process.env.NODE_ENV === 'production'
          ? 'https://api.example.com'
          : 'http://localhost:' + (process.env.PORT || 3000),
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ BearerAuth: [] }],
  },
  apis: [
    path.join(__dirname, './api/v1/routes/*.ts'),  
    path.join(__dirname, './api/v1/routes/*.js'),   
    path.join(__dirname, './api/v1/controllers/*.ts'),
    path.join(__dirname, './api/v1/controllers/*.js'),
  ], // paths to files with JSDoc
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
