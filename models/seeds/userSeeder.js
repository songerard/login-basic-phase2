// require mongoose
const mongoose = require('mongoose')

// require User model
const User = require('../user')

// set seed user
const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

// require mongoose config
require('./config/mongoose')

// add seeds
db.once('open', () => {
  console.log('Mongodb connected!')
  User.insertMany(users)
    .then(() => {
      console.log('seeder done')
    })
})