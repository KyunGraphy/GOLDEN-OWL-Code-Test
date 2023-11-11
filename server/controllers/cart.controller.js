import Cart from '../models/Cart.model.js'
import Product from '../models/Product.model.js';

export const getCartItem = async (req, res) => {
  const cartData = await Cart.find();
  const productData = await Promise.all(
    cartData.map(
      item => Product.findById(item.productId))
  )
  let result = [];
  for (let i = 0; i < productData.length; i++) {
    result.push({
      cartData: cartData,
      productData: productData,
    })
  }
  res.status(200).json(result);
};

export const addCartItem = async (req, res) => {
  try {
    const newCartItem = new Cart(req.body);
    const savedCartItem = await newCartItem.save();

    res.status(200).json(savedCartItem);
  } catch (err) {
    console.log(err);
  }
};

export const increaseCartItem = async (req, res) => {
  try {
    const cartData = await Cart.findById(req.params.id);
    const updatedCartItem = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: { quantity: cartData.quantity + 1 } },
      { new: true }
    )
    res.status(200).json(updatedCartItem)
  } catch (err) {
    console.log(err);
  }
};

export const decreaseCartItem = async (req, res) => {
  try {
    const cartData = await Cart.findById(req.params.id);
    if (cartData.quantity === 1) {
      await Cart.findByIdAndDelete(req.params.id)
      res.status(200).json({
        msg: 'Cart Item deleted successfully'
      })
      return
    }

    const updatedCartItem = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: { quantity: cartData.quantity - 1 } },
      { new: true }
    )
    res.status(200).json(updatedCartItem)
  } catch (err) {
    console.log(err);
  }
};

export const deleteCartItem = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id)
    res.status(200).json({
      msg: 'Cart Item deleted successfully'
    })
  } catch (err) {
    console.log(err);
  }
};
