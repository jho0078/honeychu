const router = require('express').Router()

const starmenu = require('./menu')

router.use('/menu', starmenu)

module.exports = router