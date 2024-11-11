import { type } from "express/lib/response";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  stockQuantity: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  mainImage: {
    type: String,
    required: true,
  },
});

export default mongoose.model("product", productSchema);
