const express = require("express");
const router = express.Router();
const Sale = require("../models/Sale");

// Get all sales (admin/reporting)
router.get("/", async (req, res) => {
  const sales = await Sale.find().populate("cashier");
  res.json(sales);
});

// Make a sale (cashier)
router.post("/", async (req, res) => {
  const { items, total, paymentType, cashier } = req.body;
  const sale = new Sale({ items, total, paymentType, cashier });
  await sale.save();
  res.json(sale);
});

module.exports = router;