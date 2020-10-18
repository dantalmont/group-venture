const router = require("express").Router();
const transactionRoutes = require("./transaction");

// Book routes
router.use("/transactions", transactionRoutes);

module.exports = router;