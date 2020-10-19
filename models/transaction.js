const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  location: { type: String },
  name: { type: String },
  bill: { type: Number },
  date: { type: String },
  status: { type: String }
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;