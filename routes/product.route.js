import express from "express";
import { createProduct } from "../controller/product/product.controller.js";

const router = express.Router();

// create product route
router.post("/create", createProduct);

export default router;
