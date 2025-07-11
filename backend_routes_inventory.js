const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// List products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add product
router.post("/", async (req, res) => {
  const { name, sku, qty, price } = req.body;
  const product = new Product({ name, sku, qty, price });
  await product.save();
  res.json(product);
});

// Edit product
router.put("/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
});

// Delete product
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;