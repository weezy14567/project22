import Product from '../models/Products.js';

export const product = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPaginatedProduct = async (req, res) => {
  const { page = 1, limit = 3 } = req.query;
  try {
    const products = await Product.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .exec();
      res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getPaginatedProducts = async (req, res) => {
  const { page = 1, limit = 3 } = req.query;
  try {
    const products = await Product.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .exec();
      res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
