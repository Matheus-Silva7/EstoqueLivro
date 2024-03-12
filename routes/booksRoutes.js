const express = require("express")
const router = express.Router()

const jwt = require("jsonwebtoken")
const SECRET = "matheustools"
function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token']
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) return res.status(401).end()

        req.userId = decoded.userId;
        next()
    })
}


const booksController = require("../controllers/booksController")

const { check, body } = require("express-validator")
const { validateTitle, validateAuthor, validateGender, validatePublisher, validatePages, validateStockQ } = require("../services/validators")


router.get('/allbooks', booksController.getAllBooks)

router.post('/register', [
    verifyJWT,
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