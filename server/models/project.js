const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: String,
  imageSrc: String,
  projectLink: String,
  techStack: [String],
  description: String,
  likes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
});

module.exports = mongoose.model('Project', schema);