const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "Contacts API Documentation for Contacts Project",
    version: "1.0.0"
  },
  host: "localhost:3000",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Contacts",
      description: "Contacts management endpoints"
    }
  ]
};

// IMPORTANT: include contacts route directly (NOT only index.js)
const endpointsFiles = [
  "./routes/index.js",
  
];

const outputFile = "./swagger.json";

swaggerAutogen(outputFile, endpointsFiles, doc);