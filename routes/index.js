// require express and Router
const express = require('express')
const router = express.Router()

// require route modules
const login = require('./modules/login')
const member = require('./modules/member')

// get login page
router.use('/', login)
router.use('/member', member)

// export router
module.exports = router