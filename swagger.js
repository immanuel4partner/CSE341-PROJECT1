const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "Contacts API Documentation for Contacts Project",
    version: "1.0.0"
  },
  host: "cse341-project1-1-mrql.onrender.com",
  schemes: ["https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Contacts",
      description: "Contacts Management Endpoints"
    }
  ]
};

// IMPORTANT: include contacts route directly (NOT only index.js)
const endpointsFiles = [
  "./routes/index.js",
  
];

const outputFile = "./swagger.json";

swaggerAutogen(outputFile, endpointsFiles, doc);