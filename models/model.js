const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0, // make sure price is a positive number
  },
  company: {
    type: String,
    required: true,
  },
});

// const Productmodel = mongoose.model("Product", DataSchema);
module.exports = DataSchema;
