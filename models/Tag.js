const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Priority: based on the importance and urgency of resolving an error
// Severity: based on the degree of the error impact on the operation of the system
const tagSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
})

const Tag = mongoose.model('Tag', tagSchema)

module.exports = Tag
