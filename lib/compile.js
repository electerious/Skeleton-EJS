'use strict'

let routes = require('./routes'),
    Rosid  = require('rosid')(routes)

process.env.OPTIMIZE = process.env.OPTIMIZE || 'true'

let opts = {
	copy: {
		files: [
			'!**/_*',
			'!**/.bower.json',
			'!**/assets/includes',
			'!**/assets/styles'
		]
	}
}

Rosid.compile('src/', 'dist/', opts)