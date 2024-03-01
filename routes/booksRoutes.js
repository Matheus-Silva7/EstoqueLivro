const express = require("express")
const router = express.Router()

router.get('/allbooks', (req, res)=>{
    res.send("Todos os livros")
})

router.post('/register', (req,res)=>{
    const title = req.body.title
    console.log(title)
})

module.exports = router