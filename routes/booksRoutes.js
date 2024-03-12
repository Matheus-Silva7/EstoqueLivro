const express = require("express")
const router = express.Router()

const booksController = require("../controllers/booksController")

const { check, body } = require("express-validator")
const { validateTitle, validateAuthor, validateGender, validatePublisher, validatePages, validateStockQ } = require("../services/validators")


router.get('/allbooks', booksController.getAllBooks)

router.post('/register', [
    validateTitle,
    validateAuthor,
    validateGender,
    validatePublisher,
    validatePages,
    validateStockQ,
], booksController.createStock)

router.patch('/book:bookID', booksController.updateBook)
router.delete('/book:bookID', booksController.deleteBook)

module.exports = router