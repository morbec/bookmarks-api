const express = require('express')
const router = express.Router()
const Bookmark = require('../models/Bookmark')
const Tag = require('../models/Tag')

// user can create a tag but not add it to any bookmark
router.post('/', (req, res) => {
  const { name } = req.body
  // const user = req.user._id
  Tag.create({ name })
    .then((tag) => {
      res.status(200).json(tag)
    })
    .catch((error) => res.status(error.code).json({ message: `Database error: ${error}` }))
})

// user can create a tag but and add it to a bookmark
router.post('/:_bookmark', (req, res) => {
  const { _bookmark } = req.params
  const { name } = req.body
  // const user = req.user._id
  Tag.create({
    name,
    _bookmark,
  }).then((tag) => {
    // res.json(tag)
    Bookmark.findOneAndUpdate({ _id: _bookmark }, { $push: { _tags: tag._id } })
      .then((data) => {
        res.json(data)
      })
      .catch((error) => {
        res.status(error.code).json({ message: `Database error: ${error}` })
      })
  })
})

router.get('/', (req, res) => {
  // return res.json({ message: 'tags....' })
  Tag.find({})
    .then((tags) => res.status(200).json(tags))
    .catch((error) => res.status(error.code).json({ message: `Database error: ${error}` }))
})

router.get('/:_id', (req, res) => {
  // return res.json({ message: req.params.id })
  Tag.findById(req.params._id)
    .then((tag) => {
      res.json(tag)
    })
    .catch((error) => {
      res.status(error.code).json({ message: `Database error: ${error}` })
    })
})

router.put('/:_id', (req, res) => {
  // return res.json({ message: req.params.id })
  Tag.findByIdAndUpdate(req.params._id, req.body, { new: true })
    .then((updatedTag) => {
      res.status(200).json(updatedTag)
    })
    .catch((error) => {
      res.status(error.code).json({ message: `Database error: ${error}` })
    })
})

router.delete('/:_id', (req, res) => {
  // return res.json({ message: req.params.id })
  Tag.findByIdAndDelete(req.params._id)
    .then(() => {
      res.status(200).json({ message: 'Tag deleted successfully' })
    })
    .catch((error) => {
      res.json({ message: `Database error: ${error}` })
    })
})

module.exports = router
