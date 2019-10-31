const router = require('express').Router()

const starmenu = require('./starmenu')
const starcombi = require('./starcombi')
const test = require('./test')

router.use('/starmenu', starmenu)
router.use('/starcombi', starcombi)
router.use('/test', test)

module.exports = router