import mongoose from 'mongoose';

//schema outlined in first vid at 21:55 
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;