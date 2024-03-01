const express = require("express")
const app = express()
const port = 3030

const routeBooks = require("./routes/booksRoutes")

app.use(express.json())

app.use('/books',routeBooks)

app.listen(port, ()=>{
console.log("servidor online, porta:"+port)
})