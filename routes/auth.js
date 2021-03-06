const express = require('express')
const passport = require('passport')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const router = express.Router()

const bcryptSalt = 10

router.post('/login', passport.authenticate('local'), (req, res) => {
  req.login(req.user, (err) => {
    if (err)
      return res.status(500).json({
        message: 'Something went wrong in the authentication process',
      })
    return res.json(req.user)
  }),
    (error, req, res) => {
      return res.status(401).json(error)
    }
})

router.post('/signup', async (req, res) => {
  const { email, password, name, avatar } = req.body
  if (email === '' || password === '') {
    return res.status(422).json({ message: 'Indicate email and password' })
  }

  const registeredUser = await User.findOne({ email }, 'email')
  if (registeredUser !== null) {
    return res.status(409).json({ message: 'The username already exists' })
  }

  const salt = bcrypt.genSaltSync(bcryptSalt)
  const hashPass = bcrypt.hashSync(password, salt)

  const newUser = await User.create({
    name: name,
    password: hashPass,
    email: email,
    avatar: avatar,
  })
  req.login(newUser, () => {
    return res.json(newUser)
  })
})

router.post('/edit/:_id', async (req, res) => {
  const { _id } = req.params
  const { email, name, avatar } = req.body
  const updatedUser = await User.findByIdAndUpdate(_id, { email, name, avatar }, { new: true })
  return res.status(200).json(updatedUser)
})

const uploader = require('../config/cloudinary-setup')
router.post('/upload', uploader.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(500).json({ message: 'No file uploaded' })
  }

  User.findByIdAndUpdate(req.user._id, { image: req.file.secure_url }, { new: true })
    .then((udpatedUser) => {
      return res.json(udpatedUser)
    })
    .catch((error) => {
      return res.status(500).json({ message: `Error updating user => ${error}` })
    })
})

router.post('/logout', (req, res) => {
  req.logout()
  res.status(200).json({ message: 'User successfully logged out' })
})

router.get('/loggedin', (req, res) => {
  if (req.isAuthenticated()) return res.json(req.user)
  return res.json(null)
})

module.exports = router
