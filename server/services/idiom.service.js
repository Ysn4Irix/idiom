const fetch = require('node-fetch')

/**
 *
 * @param {string} wordType
 * @returns {Promise<string>}
 */
const randomWord = async wordType =>
	await (await fetch(`https://idiom.ysnirix.live/db/${wordType}`)).text()

/**
 *
 * @param {string} contents
 * @returns {string}
 */
const getRandomWord = contents => {
	contents = contents.replace(/[\r]/g, '')
	const words = contents.split('\n')
	words.pop()
	const index = Math.floor(Math.random() * words.length)
	return words[index]
}

/**
 *
 * @param {string[]} words
 * @returns {Promise<string>}
 */
const phraseGenerator = async words => {
	let phrase = ''
	const allWordTypes = [
		'adjective',
		'adverb',
		'animal',
		'bodyPart',
		'gerund',
		'noun',
		'pluralNoun',
		'verb'
	]

	for (let i = 0; i < words.length; i++) {
		const word = words[i]

		if (word === '' || (word === 'a' && i === 0)) continue

		if (word.slice(0, 1) === '@') {
			if (!allWordTypes.includes(word.slice(1))) return false
			else {
				const filePath = `${word.slice(1)}s.txt`
				phrase += getRandomWord(await randomWord(filePath)) + ' '
			}
		} else phrase += word + ' '
	}
	return phrase.slice(0, -1)
}

/**
 *
 * @param {string} phrase
 * @returns {boolean}
 */
const vowelTester = phrase => new RegExp(/[aeiou]/gi).test(phrase[0])

/**
 *
 * @param {string} query
 * @returns {Promise<string>}
 */
const phraseBuilder = async query => {
	const words = query.split(' ')
	let phrase = await phraseGenerator(words)

	if (words[0] === 'a')
		phrase = vowelTester(phrase) ? `an ${phrase}` : `a ${phrase}`

	return phrase
}

module.exports = phraseBuilder
