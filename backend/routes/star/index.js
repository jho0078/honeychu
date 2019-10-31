const router = require('express').Router()

const user = require('../user')
const starmenu = require('./menu')

router.use('/', user)
router.use('/menu', starmenu)

module.exports = router