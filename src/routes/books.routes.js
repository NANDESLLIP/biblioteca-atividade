const {Router} = require("express")

const BookController = require("../controllers/BookController")

const checkBooksExists = require("../middlewares/checkBooks")

const bookRoutes = Router()
const bookController = new BookController()

bookRoutes.post("/books", bookController.createBook)
bookRoutes.get("/books", bookController.listBook)
bookRoutes.get("/books/:book_id",checkBooksExists, bookController.listClientById)
bookRoutes.put("/books/:book_id/:client_id",checkBooksExists,  bookController.borrowedBook)
bookRoutes.put("/books/:book_id",checkBooksExists,  bookController.returnedBook)
bookRoutes.delete("/books/:book_id",checkBooksExists,  bookController.deleteBook)


module.exports = bookRoutes