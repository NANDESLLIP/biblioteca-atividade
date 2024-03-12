const knex = require("../database/knex")



class BookController{

    async createBook(req, res){
        const {title, author, category, pages, published, qntdLivro} = req.body

        await knex("books").insert({title, author, category, pages, published, qntdLivro})

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

    async loan(req, res) {
        const {book_id} = req.params
        const {client_id} = req.params

        const borrowed = true;

        //const qntdLivro = diminuirLivro(book_id)
    

        await knex("bookClient").insert({book_id, client_id})

        await knex("books").where({id: book_id}).decrement("qntdLivro", 1).update({borrowed})
        

        return res.status(201).json("Livro emprestado!")
    }

    async returnedBook(req, res) {
        const {book_id} = req.params
        const borrowed = false
        
        await knex("books").where({id: book_id}).sum("qntdLivro", 1).update({borrowed})

        return res.status(201).json("Livro devolvido!")
    }

    async deleteBook(req, res){
        const {book_id} = req.params
        
        await knex("books").where({id: book_id}).delete()

        return res.status(200).json("Livro Deletado!!")
    }

    /*async diminuirLivro(book_id){
        const livro = await knex("books")

        livro.qntdLivro--
    }*/
}

module.exports = BookController