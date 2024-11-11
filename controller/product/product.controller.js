import Product from "../../models/products/Product.js";

//create product controller
export const createProduct = async (req, res) => {
  try {
    const { title, description, price, stockQuantity, category, mainImage } =
      req.body;

    if (
      !title &&
      !description &&
      !price &&
      !stockQuantity &&
      !category &&
      !mainImage
    ) {
      return res
        .status(500)
        .json({ success: false, message: "All fields required" });
    }

    const product = new Product({
      title,
      description,
      price,
      stockQuantity,
      category,
      mainImage,
    });

    await product.save();

    return res.status(200).json({
      success: true,
      message: "Product Create successfuly",
      data: product,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "server error" });
  }

  res
    .status(200)
    .json({ success: true, message: "product create successfuly" });
};

//get all products controller
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json({
      success: true,
      products,
      message: "Products fetched successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
