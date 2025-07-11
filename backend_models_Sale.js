const mongoose = require("mongoose");
const SaleSchema = new mongoose.Schema({
  items: [{ productId: String, name: String, qty: Number, price: Number }],
  total: Number,
  paymentType: String,
  cashier: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Sale", SaleSchema);