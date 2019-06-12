const express = require('express')
const router = express.Router()
const getTitleAtUrl = require('get-title-at-url')
const Bookmark = require('../models/Bookmark')
const Tag = require('../models/Tag')

router.post('/', async (req, res) => {
  const _tags = req.body.tags
  const tagsArray = []

  for (let index = 0; index < _tags.length; index++) {
    const tag = _tags[index]
    let dbTag = await Tag.findOne({ name: tag })
    if (!dbTag) {
      dbTag = await Tag.create({ name: tag })
    }
    tagsArray.push(dbTag._id)
  }

  let { title, url } = req.body
  if (!url.startsWith('http')) url = 'https://' + url.trim()

  try {
    const bookmark = await Bookmark.create({
      title,
      url,
      _owner: req.user._id,
      _tags: tagsArray
    })
    return res.json(bookmark)
  } catch (error) {
    res.status(error.code).json({ message: `Database error: ${error}` })
  }
})

router.get('/', (req, res) => {
  Bookmark.find({ _owner: req.user._id })
    .populate({ path: '_tags' })
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
      path: '_tags'
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

router.post('/scrape', (req, res) => {
  const newBookmark = req.body.anyURL
  getTitleAtUrl(newBookmark, (title) => {
    return res.json(title)
  })
})

module.exports = router
