'use strict'

const app = require('./app/app')



const connection = require('./config/connection')

app.listen(app.get('port'), () => {
    console.log(`servidor escuchando en el asdasdpuerto ${app.get('port')}`)
})