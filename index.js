//chamando express e a porta
const express = require("express");
const app = express();
const port = 3030;

//rotas
const routeBooks = require("./routes/booksRoutes");

//middleware receber json
app.use(express.json());

//conexao mongodb
const mongoose = require("mongoose");
const { db } = require("./models/books");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//middleware utilizar as rotas
app.use("/books", routeBooks);


mongoose.connect("mongodb://localhost:27017/bookStock")
.then(result=>{
    app.listen(port, () => {
        console.log("servidor online, porta:" + port);
      });
})
.catch(error=>{
    console.log(error)
})


