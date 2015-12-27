'use strict'

let sass = require('node-sass')

/*
 * Transform SASS to CSS.
 * @param {string} folderPath - Path to a folder containing all SASS files.
 * @param {string} str - SASS.
 * @param {function} next - The callback that handles the response. Receives the following properties: err, css.
 */
module.exports = function(folderPath, str, next) {

	// Only add sourceMap when necessary
	let map = (process.env.OPTIMIZE==='true' ? false : true)

	sass.render({

		data              : str,
		includePaths      : [ folderPath ],
		sourceMap         : map,
		sourceMapEmbed    : true,
		sourceMapContents : true

	}, (err, result) => {

		if (err!=null) {
			next(err, null)
			return false
		}

		next(null, result.css.toString())

	})

}