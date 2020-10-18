const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/groupventure"
);

const transactionSeed = [
  {
    location: "Applebees",
    name: "Kevin",
    bill: 5,
    date: "10/04/20",
    status: "Paid"
  },
  {
    location: "Panda Express",
    name: "Alvin",
    bill: 17,
    date: "10/12/2020",
    status: "Paid"
  },
  {
    location: "Burger King",
    name: "Yue",
    bill: 18,
    date: "10/18/2020",
    status: "Owe"
  },
  {
    location: "Chilis",
    name: "Danny",
    bill: 12,
    date: "10/14/20",
    status: "Owe"
  },
];

db.Transaction
  .remove({})
  .then(() => db.Transaction.collection.insertMany(transactionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });