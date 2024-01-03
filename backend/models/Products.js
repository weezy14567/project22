import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    a: { type: String },
    b: { type: String },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
