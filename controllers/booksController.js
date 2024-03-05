const Books = require("../models/books")
const { validationResult } = require("express-validator")

exports.getAllBooks = (req, res, next) =>{
    Books.find()
    .then(result=>{
        res.status(200).json({
            books: result
        })
    })
    .catch(error =>{
        console.log(error)
    })
}

exports.createStock = (req, res, next) => {

    const errors = validationResult(req)
    console.log(errors)

    if (!errors.isEmpty()) {
        return res.status(422).send({
            error: true,
            message: errors.array()[0].msg
        })
    }
    
    const title = req.body.title
    const author = req.body.author
    const gender = req.body.gender
    const publisher = req.body.publisher
    const pages = req.body.pages
    const stockQuantity = req.body.stockQuantity
    
    console.log(typeof(stockQuantity))
    if(stockQuantity > 0){
        const stock = new Books({
            title: title,
            author: author,
            gender: gender,
            publisher: publisher,
            pages: pages,
            stockQuantity: stockQuantity
        })
    
    
    
        stock.save()
            .then(result => {
                res.status(201).json({
                    error: false,
                    message: "Livro salvo no estoque com sucesso!!"
                })
            })
            .catch(error => {
                console.log(error)
            })
    } else {
        return res.status(400).send({
            error: true,
            message: "a quantidade do estoque deve ser maior que 0"
        })
    }
    }
    
    exports.updateBook = (req, res, next) =>{
        const bookId = req.params.bookID
        console.log(bookId)
        res.status(200).json({
            msg: "Livro atualizado com sucesso!",
            book: bookId
        });
    }

    exports.deleteBook = (req, res, next) =>{
        const bookId = req.params.bookID
        console.log(bookId)
        res.status(200).json({
            msg: "Livro excluido com sucesso!",
            book: bookId
        });
    }
   
  

  