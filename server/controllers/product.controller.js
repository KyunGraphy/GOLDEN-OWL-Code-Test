import Product from '../models/Product.model.js'

export const getProducts = async (req, res) => {
  try {
    let result
    if (req.params.id) {
      result = await Product.findById(req.params.id);
    } else {
      result = await Product.find();
    }
    res.status(200).json(result)
  } catch (err) {
    console.log(err);
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();

    res.status(200).json(savedProduct);
  } catch (err) {
    console.log(err);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).json(updatedProduct)
  } catch (err) {
    console.log(err);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json({
      msg: 'Product deleted successfully'
    })
  } catch (err) {
    console.log(err);
  }
};
