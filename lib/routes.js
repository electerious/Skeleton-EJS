'use strict'

let js   = require('rosid-handler-js')
let scss = require('rosid-handler-scss')
let ejs  = require('rosid-handler-ejs')

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