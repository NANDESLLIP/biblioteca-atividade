const {Router} = require("express");
const ClientController = require("../controllers/ClientController");

const clientRoutes = Router();
const clientController = new ClientController();

clientRoutes.post("/clients", clientController.createUser)
clientRoutes.get("/clients", clientController.listClient)
clientRoutes.get("/clients/:client_id", clientController.listClientById)
clientRoutes.put("/clients/:client_id", clientController.updateClient)
clientRoutes.delete("/clients/:client_id", clientController.deleteClient)

module.exports = clientRoutes;
