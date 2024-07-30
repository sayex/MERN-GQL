const { Schema, model } = require('mongoose');
const dayjs = require('dayjs');

const postSchema = new Schema(
  {
    postText: {
      type: String,
      required: 'You need to leave a Post!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dayjs(timestamp).format("MMMM Do YYYY, h:mm:ss a")
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);


const Post = model('post', postSchema);

module.exports = Post;
