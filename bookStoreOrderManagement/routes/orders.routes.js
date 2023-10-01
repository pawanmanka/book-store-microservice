import express from 'express';
import {getAllOrders,getOrderById,createOrder,removeOrder} from '../controllers/orders.controller.js';
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})
router.get('/',getAllOrders)
router.get('/:orderId',getOrderById);
router.post('/',createOrder);
router.delete('/:orderId',removeOrder);
export default router;