'use strict'

let js   = require('rosid-handler-js'),
    scss = require('rosid-handler-scss'),
    ejs  = require('rosid-handler-ejs')

module.exports = [
	{
		path    : 'assets/scripts/**/[^_]*.js',
		handler : js
	},
	{
		path    : 'assets/styles/[^_]*.{css,scss}',
		handler : scss
	},
	{
		path    : '[^_]*.{html,ejs}',
		handler : ejs
	}
]