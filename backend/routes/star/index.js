const router = require('express').Router()

const starmenu = require('./menu')
const starcombi = require('./combi')

router.use('/menu', starmenu)
router.use('/combi', starcombi)

module.exports = router