const { check } = require("express-validator")

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

}