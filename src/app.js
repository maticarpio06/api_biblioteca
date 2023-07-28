const express = require("express");

const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require("./middlewares/errorHandler");


require('dotenv').config();

const jwtCheck = auth({
  audience: 'http://localhost:3000/libros',
  issuerBaseURL: 'https://dev-dwnpg31uuxqpekrh.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});


const app = express();
app.use(express.json());

// Importamos el Router de Libros
const librosRouter = require("./routes/libros");

app.use("/api/libros", jwtCheck,  librosRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});

module.exports = app