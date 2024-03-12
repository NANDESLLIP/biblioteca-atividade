const knex = require('../database/knex')

async function bookIsAlreadyBorrowed(req, res, next){
    const {book_id} = req.params

    const book = await knex("books").where({id: book_id}).first()

    if(book.borrowed == false){
        next()
    }
        return res.status(400).json("Livro Indisponivel")
}

module.exports = bookIsAlreadyBorrowed 