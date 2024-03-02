const express = require("express")
const router = express.Router()

const booksController = require("../controllers/booksController")

router.get('/allbooks', (req, res)=>{
    res.send("Todos os livros")
})

router.post('/register',booksController.createStock)

module.exports = router