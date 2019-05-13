const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    avatar: { type: String },
    _bookmarks: [
      {
        type: [ Schema.Types.ObjectId ],
        ref: 'Bookmark',
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

const User = mongoose.model('User', userSchema)
module.exports = User
