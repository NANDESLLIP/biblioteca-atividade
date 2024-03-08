const knex = require("../database/knex")

class BookController{

    async createBook(req, res){
        const {title, author, category, pages, published} = req.body

        await knex("books").insert({title, author, category, pages, published})

        return res.status(201).json("Livro cadastrado!!")
    }
}

module.exports = BookController