const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookmarkSchema = new Schema(
  {
    title: {
      type: String,
    },
    url: {
      type: String,
      required: true,
    },
    _owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    _tags: [
      {
        type: [ Schema.Types.ObjectId ],
        ref: 'Tag',
      },
    ],
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
)

const Bookmark = mongoose.model('Bookmark', bookmarkSchema)
module.exports = Bookmark
