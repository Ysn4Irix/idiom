/**
 * @desc    Send any success response
 *
 * @param   {string} message
 * @param   {object | array} results
 * @param   {number} statusCode
 */

const success = (message, results, statusCode) => {
	return {
		message,
		error: false,
		code: statusCode,
		results
	}
}

/**
 * @desc    Send any error response
 *
 * @param   {string} message
 * @param   {number} statusCode
 */

const error = (message, statusCode) => {
	const codes = [200, 201, 400, 401, 404, 403, 422, 500]

	const codeFinder = codes.find(code => code === statusCode)

	if (!codeFinder) statusCode = 500
	else statusCode = codeFinder

	return {
		message,
		code: statusCode,
		error: true,
		timestamp: new Date()
	}
}

/**
 * @desc    Send any validation response
 *
 * @param   {array} errors
 */

const validation = errors => {
	return {
		message: 'Validation errors',
		error: true,
		code: 422,
		errors
	}
}

module.exports = {
	success,
	error,
	validation
}
