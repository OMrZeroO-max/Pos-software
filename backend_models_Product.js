const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: String,
  sku: String,
  qty: Number,
  price: Number
});
module.exports = mongoose.model("Product", ProductSchema);