import express from 'express';
import { all, createPost, getPost } from '../controllers/post.js';

const postRoutes = express.Router();

postRoutes.post('/u', createPost);
postRoutes.get('', all);
postRoutes.get('/f/:id', getPost);
export default postRoutes;
