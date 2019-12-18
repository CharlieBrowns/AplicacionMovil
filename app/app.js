'use strict'

const app = require('express')(),
      port = (process.env.PORT || 3000),
      bodyParser = require('body-parser'),
      logguer = require('./routers/logger')

app
    .set('port',port)
    .use(bodyParser.urlencoded({extended:true}))
    .use(bodyParser.json())
    .use('/', logguer)
    
module.exports = app
