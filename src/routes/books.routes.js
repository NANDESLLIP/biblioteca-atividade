const {Router} = require("express")

const BookController = require("../controllers/BookController")

const bookRoutes = Router()
const bookController = new BookController()

bookRoutes.post("/books", bookController.createBook)


module.exports = bookRoutes