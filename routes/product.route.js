import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
} from "../controller/product/product.controller.js";

const router = express.Router();

// create product route
router.post("/create", createProduct);
// get all products route
router.get("/", getAllProducts);
//get product by id
router.get("/:productId", getProductById);
// delete product route
router.delete("/:productId", deleteProduct);

export default router;
