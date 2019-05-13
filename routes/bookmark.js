const express = require('express')
const router = express.Router()
const Bookmark = require('../models/Bookmark')

router.post('/', (req, res) => {
  Bookmark.create({
    title: req.body.title,
    url: req.body.url,
    _owner: req.user._id,
    tags: [],
  })
    .then((bookmark) => {
      res.json(bookmark)
    })
    .catch((error) => {
      res.status(error.code).json({ message: `Database error: ${error}` })
    })
})

router.get('/', (req, res) => {
  Bookmark.find({})
    .then((bookmarks) => {
      res.json(bookmarks)
    })
    .catch((error) => {
      res.status(error.code).json({ message: `Database error: ${error}` })
    })
})

router.get('/:_id', (req, res) => {
  Bookmark.findById(req.params._id)
    .populate({
      path: 'tags',
    })
    .then((bookmark) => {
      res.json(bookmark)
    })
    .catch((error) => {
      res.status(error.code).json({ message: `Database error: ${error}` })
    })
})

router.put('/:_id', (req, res) => {
  const { title, url, _owner, _tags } = req.body
  Bookmark.findByIdAndUpdate(req.params._id, { title, url, _owner, _tags }, { new: true })
    .then((updatedBookmark) => {
      res.json(updatedBookmark)
    })
    .catch((error) => {
      res.status(error.code).json({ message: `Database error: ${error}` })
    })
})

router.delete('/:_id', (req, res) => {
  Bookmark.findByIdAndDelete(req.params._id)
    .then(() => {
      res.status(200).json({ message: 'Bookmark deleted successfully' })
    })
    .catch((error) => {
      res.json({ message: `Database error: ${error}` })
    })
})

module.exports = router
