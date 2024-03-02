const Books = require("../models/books")

exports.createStock = (req, res, next) =>{
    const title = req.body.title
    const author = req.body.author
    const gender = req.body.gender
    const publisher = req.body.publisher
    const pages = req.body.pages
    const stockQuantity = req.body.stockQuantity

    const stock = new Books({
        title: title,
        author: author,
        gender: gender,
        publisher: publisher,
        pages: pages, 
        stockQuantity: stockQuantity
    })

    stock.save()
    .then(result=>{
        res.status(201).json({
            error: false,
            message: "Livro salvo no stock com sucesso!!"
        })
    })
    .catch(error=>{
        console.log(error)
    })
}