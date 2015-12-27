'use strict'

let uglifyjs = require('uglify-js')

/*
 * Compress JS using UglifyJS.
 * @param {string} str - JS.
 * @param {function} next - The callback that handles the response. Receives the following properties: err, js.
 */
module.exports = function(str, next) {

	// Only compress files when necessary
	if (process.env.OPTIMIZE==='false') next(null, str)

	try {

		let result = uglifyjs.minify(str, {
			fromString: true
		})

		next(null, result.code)

	} catch (err) {

		next(err, null)

	}

}