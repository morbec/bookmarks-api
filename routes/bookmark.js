const express = require('express')
const router = express.Router()
const Bookmark = require('../models/Bookmark')
const Tag = require('../models/Tag')

router.post('/', async (req, res) => {
  // TOOD: Rename _tags to tags (for consistency)
  let { title, url, tags } = req.body
  const _owner = req.user._id
  const _tags = []

  for (let index = 0; index < tags.length; index++) {
    const tag = tags[index].trim()
    if (tag.length) {
      let dbTag = await Tag.findOne({ name: tag })
      if (!dbTag) {
        dbTag = await Tag.create({ name: tag })
      }
      _tags.push(dbTag._id)
    }
  }

  if (!url.startsWith('http')) url = 'https://' + url.trim()

  try {
    const bookmark = await Bookmark.create({ title, url, _owner, _tags })
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

router.put('/:_id', async (req, res) => {
  const { _id } = req.params // bookmark._id
  const _owner = req.user._id // user._id
  let { title, url, tags } = req.body
  const _tags = []

  for (let index = 0; index < tags.length; index++) {
    const tag = tags[index].trim()
    if (tag.length) {
      let dbTag = await Tag.findOne({ name: tag })
      if (!dbTag) {
        dbTag = await Tag.create({ name: tag })
      }
      _tags.push(dbTag._id)
    }
  }

  if (!url.startsWith('http')) url = 'https://' + url.trim()

  try {
    const editedBookmark = await Bookmark.findByIdAndUpdate(
      _id,
      { title, url, _owner, _tags },
      { new: true }
    )
    return res.json(editedBookmark)
  } catch (error) {
    return res.status(error.code).json({ message: `Database error: ${error}` })
  }
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
