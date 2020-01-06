'use strict'

const Pay = require('../models/pay')
var data = 0;
async function newPay (req, res) {

    if (data == 0) {
        const newPay = new Pay({
            Dni : req.body.Dni,
            N_papeleta : req.body.N_papeleta,
            Estado : req.body.Estado
        })
        data = data + 1;
        var pay = await newPay.save()
        
        res.send({message: 'exito'})
        
    }else {
        console.log("ya no se puede" )
        data = 0;
    }

}

async function getPays (req, res){
    console.log("getPays")
    var pays = await Pay.find();
    res.send({dataserverP:pays})
}


module.exports = {
    newPay,
    getPays
}

