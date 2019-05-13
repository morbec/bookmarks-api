const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../models/User')

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    (email, password, done) => {
      User.findOne({ email })
        .then((foundUser) => {
          if (!foundUser) {
            done(null, false, { message: 'Incorrect email ' })
            return
          }

          if (!bcrypt.compareSync(password, foundUser.password)) {
            done(null, false, { message: 'Incorrect password' })
            return
          }

          done(null, foundUser)
        })
        .catch((err) => done(err))
    },
  ),
)
