const uptimeFormat = require('../helpers/upTime')
const { success, error } = require('../helpers/apiResponse')
const logger = require('../helpers/logger')
const phraseBuilder = require('../services/idiom.service')

module.exports = {
	/**
	 *
	 * @param {import('express').Request} _
	 * @param {import('express').Response} res
	 */
	alive: (_, res) => {
		try {
			res.status(200).json(
				success("🎉I'm alive", {
					upTime: uptimeFormat(process.uptime())
				})
			)
		} catch (err) {
			logger.error(err.message)
			res.status(500).json(
				error(
					'Oops! We have an problem in our backend 😢',
					res.statusCode
				)
			)
		}
	},
	/**
	 *
	 * @param {import('express').Request} req
	 * @param {import('express').Response} res
	 */
	idiom: async (req, res) => {
		const { query } = req.params

		try {
			const phrase = await phraseBuilder(query)
			if (phrase === false)
				return res
					.status(400)
					.json(error('Invalid word type', res.statusCode))

			res.status(200).json(success('🎉 done', phrase, res.statusCode))
		} catch (err) {
			logger.error(err.message)
			res.status(500).json(
				error(
					'Oops! We have an problem in our backend 😢',
					res.statusCode
				)
			)
		}
	}
}
