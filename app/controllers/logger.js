'use strict'

// const User = require('../models/infractor')
const Persona = require('../models/persona') 
const Infractor = require('../models/infractor')
const Secretaria = require('../models/secretaria')
const Policia = require('../models/policia')

async function signUp(req, res) {
    
    // verificamos si existe el usuario
    console.log("los datos : " , req.body)
    var persona = await Persona.find(
        {Nombres : req.body.Nombres},
    )

    if (persona.length != 0) {
        res.send({message : 'esta persona ya esta registrada'})
    }else {
    try {
        const newPersona  = new Persona({
            Dni : req.body.Dni,
            Apellido_Paterno : req.body.Apellido_Paterno,
            Apellido_Materno : req.body.Apellido_Materno,
            Nombres          : req.body.Nombres,
            Domicilio        : req.body.Domicilio    
        })
        var persona = await newPersona.save()

        console.log("tipo" , req.body.type)

        switch (req.body.type) {
            case 'infractor': 
                const newInfractor = new Infractor({
                    Password : req.body.Password,
                    persona : newPersona._id
                })
                var infractor = await newInfractor.save()
                break;
            case 'secretaria':
                const newSecretaria = new Secretaria({
                    Password : req.body.Password,
                    persona : newPersona._id
                })
                var secretaria = await newSecretaria.save()
                break;
            case 'policia':
                const newPolicia = new Policia({
                    Password : req.body.Password,
                    N_de_CIP : req.body.N_de_CIP,
                    Cargo : req.body.Cargo,
                    persona : newPersona._id
                })

                var policia = await newPolicia.save()
                break;
            default:
                console.log("no estas especificando el roll")
                break;
        }

        res.send({data : "datos incritos correctamente"});
    }catch(err){
        console.log("error : ", err)
    }
    }
}

async function verify (person , nombres) {
    console.log("el nombre de las personas : " , nombres)
    console.log("las personas : " , person)
    if (person.length == 0) {
        return false
    }else{
        // return true
        var persona = await Persona.find({
            Nombres : nombres
        })
        console.log("la persona : " , persona , ":",   persona.length)
        if(persona.length == 0) {
            return false
        }else{
            return true
        }
    }
}

async function signIn(req, res) {
    console.log("los que estamos enviando " , req.body)

    switch (req.body.type) {
        case 'infractor': 
            var infractor = await Infractor.find(
                {Password : req.body.Password},
            )
            if (await verify(infractor, req.body.Nombres) == true) {
                res.send({message : 'logueado correctamente'})
            }else{
                res.send({message : 'datos incorrectos'})
            }
            break;
        case 'secretaria':
            var secretaria = await Secretaria.find(
                {Password : req.body.Password},
            )

            console.log("las secretaria : " , secretaria)
            if (await verify(secretaria, req.body.Nombres) == true) {
                res.send({message : 'logueado correctamente'})
            }else{
                res.send({message : 'datos incorrectos'})
            }
  
            break;
        case 'policia':
            var policia = await Policia.find(
                {Password : req.body.Password},
            )
            if (await verify(policia, req.body.Nombres) == true) {
                res.send({message : 'logueado correctamente'})
            }else{
                res.send({message : 'datos incorrectos'})
            }
            break;
        default:
            console.log("no estas especificando el roll")
            break;
    }

}

module.exports = {
    signUp,
    signIn
}