'use strict'

let routes = require('./routes')
let Rosid  = require('rosid')(routes)

process.env.OPTIMIZE = process.env.OPTIMIZE || 'false'

Rosid.serve('src/')