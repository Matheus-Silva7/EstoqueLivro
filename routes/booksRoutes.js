const express = require("express")
const router = express.Router()

const booksController = require("../controllers/booksController")

const { check, body } = require("express-validator")
const {
    validateTitle,
    validateAuthor,
    validateGender,
    validatePublisher,
    validatePages,
    validateStockQ } = require("../services/validators")

router.get('/allbooks', (req, res) => {
    res.send("Todos os livros")
})

router.post('/register', [
    validateTitle,
    validateAuthor,
    validateGender,
    validatePublisher,
    validatePages,
    validateStockQ
], booksController.createStock)

module.exports = router