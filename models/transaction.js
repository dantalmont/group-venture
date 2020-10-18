const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  location: { type: String, required: true },
  name: { type: String, required: true },
  bill: { type: Number, require: true },
  date: { type: String, required: true },
  status: { type: String, required: true }
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;