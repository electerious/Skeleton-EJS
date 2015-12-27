'use strict'

let fs       = require('fs'),
    async    = require('async'),
    babel    = require('./babel'),
    uglifyjs = require('./uglifyjs')

/*
 * Transform and compress JS.
 */
module.exports = function(filePath, srcPath, distPath, route, next) {

	let savePath = filePath.replace(srcPath, distPath)

	async.waterfall([

		(next)      => fs.readFile(filePath, 'utf8', next),
		(str, next) => babel(str, next),
		(str, next) => uglifyjs(str, next)

	], (err, str) => {

		if (err!=null) {
			next(err, null, null)
			return false
		}

		next(null, str, savePath)

	})

}