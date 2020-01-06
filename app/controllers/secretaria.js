'use strict'

const Pay = require('../models/pay')

async function newPay (req, res) {
    console.log("new Pay" , req.body)

    
    const newPay = new Pay({
        Dni : req.body.Dni,
        N_papeleta : req.body.N_papeleta,
        Estado : req.body.Estado
    })

    var pay = await newPay.save()
}

async function getPays (req, res){
    console.log("getPays")
    var pays = await Pay.find();
    res.send(pays)
}


module.exports = {
    newPay,
    getPays
}

