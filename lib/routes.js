'use strict'

let scripts = require('./scripts/index.js'),
    styles  = require('./styles/index.js'),
    sites   = require('./sites/index.js')

module.exports = [
	{
		path    : 'assets/scripts/**/*.js',
		handler : scripts
	},
	{
		path    : 'assets/styles/[^_]*.{css,scss}',
		handler : styles
	},
	{
		path    : '[^_]*.{html,ejs}',
		handler : sites
	}
]