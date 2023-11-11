import express from 'express';
import { getCartItem, addCartItem, deleteCartItem, increaseCartItem, decreaseCartItem } from '../controllers/cart.controller.js';

const router = express.Router();

router.get('/', getCartItem);
router.post('/', addCartItem);
router.put('/increase/:id', increaseCartItem);
router.put('/decrease/:id', decreaseCartItem);
router.delete('/:id', deleteCartItem);

export default router;