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

//update product
export const updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const { title, description, price, stockQuantity, category, mainImage } =
      req.body;
    const findProduct = await Product.findById(productId);
    if (!findProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product does not exist" });
    }

    findProduct.title = title || findProduct.title;
    findProduct.description = description || findProduct.description;
    findProduct.price = price || findProduct.price;
    findProduct.stockQuantity = stockQuantity || findProduct.stockQuantity;
    findProduct.category = category || findProduct.category;
    findProduct.mainImage = mainImage || findProduct.mainImage;

    //update
    await findProduct.save();

    return res.status(200).json({
      success: true,
      updatedProduct: findProduct,
      message: "Product updated successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

// delete product
export const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product does not exist" });
    }

    return res.status(200).json({
      success: true,
      deletedProduct: product,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log(error);
  }
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

// get product by id
export const getProductById = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product does not exist" });
    }

    return res.status(200).json({
      success: true,
      product,
      message: "Product fetched successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
