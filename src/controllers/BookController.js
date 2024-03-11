const knex = require("../database/knex")

const ClientController = require("./ClientController")


class BookController{

    async createBook(req, res){
        const {title, author, category, pages, published} = req.body

        await knex("books").insert({title, author, category, pages, published})

        return res.status(201).json("Livro cadastrado!!")
    }

    async listBook(req, res){
        const book = await knex('books')

        return res.status(200).json(book)
    }

    async listClientById(req, res){
        const {book_id} = req.params;

        const [book] = await knex("books").where({id: book_id});

        return res.status(200).json(book);
    }

    async borrowedBook(req, res) {
        const {book_id} = req.params
        const {client_id} = req.params

        const borrowed = true
        
        await knex("books").where({id: book_id}).update({client_id, borrowed})

        return res.status(201).json("Livro emprestado!")
    }

    async returnedBook(req, res) {
        const {book_id} = req.params
        const client_id = null

        const borrowed = false
        
        await knex("books").where({id: book_id}).update({client_id, borrowed})

        return res.status(201).json("Livro devolvido!")
    }

    async deleteBook(req, res){
        const {book_id} = req.params
        
        await knex("books").where({id: book_id}).delete()

        return res.status(200).json("Livro Deletado!!");
    }
}

module.exports = BookController