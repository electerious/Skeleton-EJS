'use strict'

let babel = require('babel-core')

/*
 * Transform JS using Babel.
 * @param {string} str - JS.
 * @param {function} next - The callback that handles the response. Receives the following properties: err, js.
 */
module.exports = function(str, next) {

	try {

		let result = babel.transform(str, {
			presets    : ['es2015'],
			sourceMaps : 'inline'
		})

		next(null, result.code)

	} catch (err) {

		next(err, null)

	}

}