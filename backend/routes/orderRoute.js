import express from 'express';
import adminAuth from '../middleware/adminAuth.js';
import userAuth from '../middleware/auth.js';
import {placeOrder,placeOrderStripe,allOrders,userOrders,updateStatus, verifyStripe} from '../controllers/orderController.js';

const orderRouter = express.Router();

// Admin Features
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);

// Payment Methods
orderRouter.post('/place',userAuth, placeOrder);
orderRouter.post('/stripe',userAuth, placeOrderStripe);

// User Features
orderRouter.post('/userorders',userAuth, userOrders);

// verify payment
orderRouter.post('/verifyStripe', userAuth, verifyStripe)

export default orderRouter;