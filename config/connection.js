'use strict'

const Mongoose = require('mongoose'),
      dataSecret = require('./database.json')

const uri = dataSecret.mongoDB.uri
const config = {
    user : process.env.DB_USER || dataSecret.mongoDB.user,
    pass : process.env.DB_PASS || dataSecret.mongoDB.pass,
    useNewUrlParser : true
}

const connexion = Mongoose.connect(uri, config, (data) => {
    console.log("se a conectado conectado correctamente a la base de datos")
})

module.exports = connexion