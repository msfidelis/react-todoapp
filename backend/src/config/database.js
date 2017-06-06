'use strict'

const mongoose = require('mongoose')

//Node Promisse
mongoose.Promise = global.Promise

module.exports = mongoose.connect("mongodb://localhost/todo")
