import express from 'express';
import { createUser, login } from '../controllers/user.js';

const userRoutes = express.Router();

userRoutes.post('/', createUser);

userRoutes.post('/login', login);
export default userRoutes;
