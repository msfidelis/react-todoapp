'use strict'

const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const cors = require('./cors')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(cors) 
    
server.listen(port, () => {
    console.log(`BACKEND DO TODOAPP RUNNING AT: ${port}`)
})

module.exports = server
