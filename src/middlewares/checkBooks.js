const knex = require("../database/knex")

async function checkBooksExists(req, res, next){
    const {book_id} = req.params
    const book = await knex("books").where({id: book_id})

    if(book.length === 0){
        return res.status(201).json("Livro não existe")
    }

    next()
}

module.exports = checkBooksExists