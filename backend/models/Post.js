import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    img: { type: String },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
