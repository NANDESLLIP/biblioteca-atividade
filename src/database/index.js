const mysql = require("mysql2")

const pool = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "library-att"
}).promise()

async function Connection() {
    await pool.connect ((err) => {
        if(err){
            throw err
        }
        console.log("MySql connected")
    
    })
    pool.destroy()
}

module.exports = {Connection, pool}