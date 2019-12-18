'use strict'

const Mongoose = require('mongoose')

const Recibo = new Mongoose.Schema({
    Nombre_infractor : {type : String, required : true},
    Monto_total : {type : Number , required : true},
    Secretaria : { type: Schema.ObjectId, ref: "Secretaria" }
})

module.exports = Mongoose.model('Recibo' , Recibo)