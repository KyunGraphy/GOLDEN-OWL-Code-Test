import express from 'express';
import { getAllProducts } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', getAllProducts);
// router.get('/:id', getOneProducts);
// router.post('/', createProducts);
// router.put('/:id', updateProducts);
// router.delete('/:id', deleteProducts);

export default router;