const router = require('express').Router()

const { alive, idiom } = require('../controllers/idiom.controller')

router.get('/alive', alive)

router.get('/:query', idiom)

module.exports = router
