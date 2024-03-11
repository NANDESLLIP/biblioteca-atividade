const knex = require('../database/knex')

async function bookIsAlreadyBorrowed(req, res, next){
    const {book_id} = req.params

    const book = await knex("books").where({id: book_id})

    if(!book.borrowed){
        next()
    }

    return res.status(400).json("Livro Indisponivel")

    console.log(book.borrowed);
}

module.exports = bookIsAlreadyBorrowed