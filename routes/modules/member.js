// require express and Router
const express = require('express')
const router = express.Router()

// require cookie-parser
const cookieParser = require('cookie-parser')
router.use(cookieParser())

// require user model
const Users = require('../../models/user')

// set route

// post login page
router.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const session_id = generateSessionId()
  const session_dateTimeStamp = Date.now()
  Users.find({ email, password })
    .then(result => {
      if (result.length) {
        result[0].session_id = session_id
        result[0].session_dateTimeStamp = session_dateTimeStamp
        result[0].save()
        res.cookie('session_id', session_id)
        res.cookie('session_dateTimeStamp', session_dateTimeStamp)
        res.redirect('/member/welcome')
      } else {
        const loginFail = true
        res.render('index', { loginFail })
      }
    })
    .catch(error => console.log(error))
})

// get welcome page
router.get('/welcome', (req, res) => {
  const session_id = req.cookies.session_id
  const session_dateTimeStamp = req.cookies.session_dateTimeStamp
  const now = Date.now()
  const cookieExpired = (now - session_dateTimeStamp >= 5 * 60 * 1000) ? true : false
  if (!session_id || cookieExpired) {
    const loginFail = true
    res.render('index', { loginFail })
  } else {
    Users.find({ session_id })
      .then(result => {
        if (result.length) {
          const firstName = result[0].firstName
          res.render('welcome', { firstName })
        } else {
          const loginFail = true
          res.render('index', { loginFail })
        }
      })
      .catch(error => console.log(error))
  }
})

// get logout
router.get('/logout', (req, res) => {
  res.cookie('session_id', '')
  res.cookie('session_dateTimeStamp', '')
  res.redirect('/')
})

// Generate Session Id
function generateSessionId() {
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerCase = upperCase.toLowerCase()
  const num = '1234567890'
  const pool = upperCase + lowerCase + num
  const maxLength = 5
  let session_id = ''
  for (let i = 1; i <= maxLength; i++) {
    session_id = session_id + pool[Math.floor(Math.random() * pool.length)]
  }
  return session_id
}

// export module
module.exports = router