const router = require('express').Router()

const starmenu = require('./starmenu')

router.use('/starmenu', starmenu)

module.exports = router