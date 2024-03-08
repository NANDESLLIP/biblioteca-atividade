const knex = require("../database/knex")

class ClientController{
    async createUser(req, res){
        const{name, username, telefon, email} = req.body

        const loan = 0;

        await knex("clients").insert({name, username, telefon, email, loan})

        return res.status(201).json("Cliente cadastrado");
    }

    async listClient(req, res){
            const client = await knex('clients');

            return res.status(200).json(client);
    }

    async listClientById(req, res){
        const {client_id} = req.params;

        const [client] = await knex("clients").where({id: client_id});

        return res.status(200).json(client);
    }

    async updateClient(req, res){
        const {client_id} = req.params
        const {name, telefon, email} = req.body

        await knex("clients").where({id:client_id}).update({name, telefon, email})

        return res.status(200).json("Cliente atualizado!!");
    }
    

    async deleteClient(req, res){
        const {client_id} = req.params

        await knex("clients").where({id: client_id}).delete()

        return res.status(201).json("cliente deletado!!")
    }


}

module.exports = ClientController;