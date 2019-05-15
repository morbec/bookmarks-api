/* eslint-disable import/order */
require('dotenv').config()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const path = require('path')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const cors = require('cors')

var Loggerr = require('loggerr')
const log = new Loggerr()

const mongodbUrl = process.env.NODE_ENV === 'DEV' ? process.env.MONGODB_DEV_URL : process.env.MONGODB_PROD_URL
mongoose
  .connect(mongodbUrl, { useNewUrlParser: true, useCreateIndex: true })
  .then((x) => {
    log.info('Connected to Mongo!', {
      database_name: `${x.connections[0].name}`,
    })
  })
  .catch((err) => {
    log.error(new Error(`Error connecting to mongo: ${err}`))
  })

const app_name = require('./package.json').name

// eslint-disable-next-line no-unused-vars
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`)

const app = express()

// Middleware Setup
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// default value for title local
app.locals.title = 'Bookmarks'

app.use(express.static(path.join(__dirname, 'public')))

// Enable authentication using session + passport
app.use(
  session({
    secret: 'stone dead forever',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  }),
)
require('./passport')(app)

// CORS settings to allow cross-oring interacton
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
)

app.use('/', require('./routes/index'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/bookmark', require('./routes/bookmark'))
app.use('/api/tag', require('./routes/tag'))

app.use((req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

module.exports = app
