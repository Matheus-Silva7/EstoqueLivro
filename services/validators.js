const { check } = require("express-validator")
const User = require("../models/user.js")

//validações para que ao menos 1 caractere seja inserido
module.exports = {
    validateTitle: check("title").isLength({ min: 1 })
        .withMessage("Insira um título válido"),
    validateAuthor: check("author").isLength({ min: 1 })
        .withMessage("Insira um autor(a) válido"),
    validateGender: check("gender").isLength({ min: 1 })
        .withMessage("Insira um gênero válido"),
    validatePublisher: check("publisher").isLength({ min: 1 })
        .withMessage("Insira uma editora válido"),
    validatePages: check("pages").isLength({ min: 1 })
        .withMessage("Insira um numero de páginas válido"),
    validateStockQ: check("stockQuantity").isLength({ min: 1 })
        .withMessage("Insira uma quantidade de estoque válido"),
        validateEmail: check("email")
        .isEmail()
        .withMessage("Digite um email válido!"),
    validatePassword: check("password")
        .isLength({ min: 8 })
        .withMessage("A senha precisa de pelo menos 8 caracters!"),

    validateName: check("name")
        .isLength({ min: 5 })
        .withMessage("O nome precisa de pelo menos 5 caracters!")
}