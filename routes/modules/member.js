// require express and Router
const express = require('express')
const router = express.Router()

// require user model
const Users = require('../../models/user')

// set route

// post login page
router.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  Users.find({ email, password })
    .lean()
    .then(result => {
      if (result.length) {
        const firstName = result[0].firstName
        res.render('welcome', { firstName })
      } else {
        const loginFail = true
        res.render('index', { loginFail })
      }
    })
})

// export module
module.exports = router