import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('Cart', CartSchema);
