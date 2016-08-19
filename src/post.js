import { normalize, arrayOf, Schema } from 'normalizr'
import util from 'util'

export const data = {
  id: 11,
  subject: "Blog Title",
  content: "Some really short blog content.  Actually the least interesting post ever",
  like_count: 0,
  dislike_count: 1,
  created_at: "2016-01-10T23:07:43.248Z",
  updated_at: "2016-01-10T23:07:43.248Z",
  author: {
    id: 81,
    name: "Mr Shelby"
  },
  comments: [{
    id: 352,
    content: "First!",
    created_at: "2016-01-10T23:07:43.248Z",
    updated_at: "2016-01-10T23:07:43.248Z",
    author: {
      id: 41,
      name: "Strange man"
    }
  }, {
    id: 212,
    content: "Second but still me!! XDD",
    created_at: "2016-01-10T23:07:43.248Z",
    updated_at: "2016-01-10T23:07:43.248Z",
    author: {
      id: 41,
      name: "Strange man"
    }
  }]
}

const postSchema = new Schema('posts')
const commentSchema = new Schema('comments')
const postAuthorSchema = new Schema('postAuthors')
const commentAuthorSchema = new Schema('commentAuthors')

postSchema.define({
  author: postAuthorSchema,
  comments: arrayOf(commentSchema)
})

commentSchema.define({
  author: commentAuthorSchema
})

const state = normalize(data, postSchema)
console.log(util.inspect(state, false, null))
