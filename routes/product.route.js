import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
} from "../controller/product/product.controller.js";

const router = express.Router();

// create product route
router.post("/create", createProduct);
// get all products route
router.get("/", getAllProducts);
export default router;
//get product by id
router.get("/:productId", getProductById);
