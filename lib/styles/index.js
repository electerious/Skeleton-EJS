'use strict'

let path    = require('path'),
    fs      = require('fs'),
    async   = require('async'),
    sass    = require('./sass'),
    postcss = require('./postcss')

const renameExtension = function(filePath, fileExt) {

	let parsedPath = path.parse(filePath)

	return parsedPath.dir + path.sep + parsedPath.name + '.' + fileExt

}

/*
 * Transform SASS, add vendor prefixes and minify CSS.
 */
module.exports = function(filePath, srcPath, distPath, route, next) {

	filePath = renameExtension(filePath, 'scss')

	let folderPath = path.dirname(filePath),
	    savePath   = renameExtension(filePath.replace(srcPath, distPath), 'css')

	async.waterfall([

		(next)      => fs.readFile(filePath, 'utf8', next),
		(str, next) => sass(folderPath, str, next),
		(str, next) => postcss(folderPath, str, next)

	], (err, str) => {

		if (err!=null) {
			next(err, null, null)
			return false
		}

		next(null, str, savePath)

	})

}