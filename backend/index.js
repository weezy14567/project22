import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/product.js';
import cors from 'cors'
import postRoutes from './routes/post.js';
import userRoutes from './routes/user.js';

const app = express();
app.use(express.json());
app.use(cors({
  origin:'http://localhost:3000'
}))
app.use('/api/products', productRoutes)
app.use('/api/post', postRoutes)
app.use('/api/user', userRoutes)
const port = 8090;

mongoose
  .connect('mongodb+srv://freshout1456:freshout1456@cluster0.bsttyna.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('DB connected');
  })
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log('listening on port ' + port);
});
