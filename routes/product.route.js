import express from "express";
import {
  createProduct,
  getAllProducts,
} from "../controller/product/product.controller.js";

const router = express.Router();

// create product route
router.post("/create", createProduct);
// get all products route
router.get("/", getAllProducts);
export default router;
