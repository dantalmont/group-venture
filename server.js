const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

const MONGODB_URI = "mongodb+srv://danTalmont:helloworld@groupventure.fw3ir.mongodb.net/GroupVenture?retryWrites=true&w=majority"

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI || "mongodb://localhost/groupventure");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

