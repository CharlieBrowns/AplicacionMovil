'use strict'

const Mongoose = require('mongoose')

const Pay = new Mongoose.Schema({
    Dni : {type : String , required : true},
    N_papeleta : {type : String, required : true},
    Estado : {type : String, required : true},
})

module.exports = Mongoose.model('Pay', Pay)


