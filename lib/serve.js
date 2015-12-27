'use strict'

let routes = require('./routes'),
    Rosid  = require('rosid')(routes)

process.env.OPTIMIZE = process.env.OPTIMIZE || 'false'

Rosid.serve('src/', (err) => {

	if (err!=null) {
		console.log(err)
		return false
	}

	return true

})