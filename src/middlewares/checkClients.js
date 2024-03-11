const knex = require('../database/knex')

async function checkClientExists(req, res, next){
    const {client_id} = req.params
    const client = await knex("clients").where({id: client_id})

    if(client.length === 0){
        return res.status(201).json("Cliente não existe")
    }
    next();

}

module.exports = checkClientExists