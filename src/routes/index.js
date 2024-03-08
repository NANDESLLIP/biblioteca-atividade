const {Router} = require("express")
const clientRoutes = require("./clients.routes");
const bookRoutes = require("./books.routes")


const routes = Router()

routes.use("/", clientRoutes)
routes.use("/", bookRoutes)

module.exports = routes