// require express and Router
const express = require('express')
const router = express.Router()

// set route
// get login page
router.get('/', (req, res) => {
  res.render('index')
})

// export module
module.exports = router