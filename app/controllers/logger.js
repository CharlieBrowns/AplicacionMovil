'use strict'

const User = require('../models/user')

async function signUp(req, res) {
    console.log("los datos que estan llegando del registro", req.body)
    try{
        const newUser = new User({
            nombres : req.body.nombres,
            apellidos : req.body.apellidos,
            DNI : req.body.DNI,
            password : req.body.password                                                                                                                                                        
        })

        var data = await newUser.save()

        res.send({message : data})        
    }catch(error) {
        console.log("ha ocurrido un error")
    }

}

async function signIn(req, res) {
    console.log("los que estamos enviando " , req.body.password)

    var usuarios = await User.find(
        {password : req.body.password},
    )
    
    if(usuarios.length == 0){
        res.send({message : false})
    }else{
        console.log("los datos", usuarios)    
        res.send({message : true})    
    }
}

module.exports = {
    signUp,
    signIn
}