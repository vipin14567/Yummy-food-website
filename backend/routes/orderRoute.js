import express from "express";
import auth from "../middlerware/auth.js";
import { placeOrder } from "../controllers/orderController.js";
import authMiddleware from "../middlerware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);

export default orderRouter;