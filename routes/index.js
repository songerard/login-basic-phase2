// require express and Router
const express = require('express')
const router = express.Router()

// require route modules
const home = require('./modules/home')
const member = require('./modules/member')

// get login page
router.use('/', home)
router.use('/member', member)

// export router
module.exports = router