const router = require('express').Router()

const starmenu = require('./starmenu')
const starcombi = require('./starcombi')

router.use('/starmenu', starmenu)
router.use('/starcombi', starcombi)

module.exports = router