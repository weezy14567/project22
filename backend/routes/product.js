import express from 'express';
import { getPaginatedProducts, product } from '../controllers/product.js';

const productRoutes = express.Router();


productRoutes.post('/fhdlhfdjkd', product);
productRoutes.get('', getPaginatedProducts);
export default productRoutes;
