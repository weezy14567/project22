import Post from "../models/Post.js";

export const createPost = async (req, res) => {
    try {
      const post = new Post(req.body);
      await post.save();
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
export const getPost = async (req, res) => {
    const {id} = req.params
    try {
      const post = await Post.findById(id);
      if(!post){res.status(404).json({ message:"Not Found"})};
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const all =async (req, res) => {
    try {
      const post = await Post.find()
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }