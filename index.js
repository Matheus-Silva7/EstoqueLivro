// Chamando express e a porta
const express = require("express");
const app = express();
const port = 3030;

// Rotas
const routeBooks = require("./routes/booksRoutes");
const routeUser = require("./routes/userRoutes");

// Middleware para receber JSON
app.use(express.json());

// Conexão MongoDB
const mongoose = require("mongoose");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Middleware para utilizar as rotas
app.use("/books",routeBooks);
app.use("/auth", routeUser);


// Conexão com o banco de dados local
mongoose
  .connect("mongodb://127.0.0.1:27017/bookStock")
  .then((result) => {
    app.listen(port, () => {
      console.log("Servidor online, porta:" + port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
