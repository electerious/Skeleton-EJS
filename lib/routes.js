'use strict'

let js   = require('rosid-handler-js'),
    scss = require('rosid-handler-scss'),
    ejs  = require('rosid-handler-ejs')

module.exports = [
	{
		name    : 'JS',
		path    : 'assets/scripts/**/[^_]*.js',
		handler : js
	},
	{
		name    : 'SCSS',
		path    : 'assets/styles/[^_]*.{css,scss}',
		handler : scss
	},
	{
		name    : 'EJS',
		path    : '[^_]*.{html,ejs}',
		handler : ejs
	}
]