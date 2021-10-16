// require express
const express = require('express')
const app = express()

// require body-parser
const bodyParser = require('body-parser')
app.use(express.urlencoded({ extended: true }))

// require express-handlebars
const exphbs = require('express-handlebars')
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

// require router
const routes = require('./routes')
app.use(routes)

// set port
const port = 3000

// require user model
const Users = require('./models/user')

// require mongoose config
require('./config/mongoose')

// listen to port
app.listen(port, () => {
  console.log(`Express is listening to http://localhost:${port}`)
})

