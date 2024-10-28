const mongoose = require("mongoose");

const Product = new mongoose.Schema({

  price: {
    type: Number,
    required: true,
    min: 0, 
  },
  priceBefore: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [String]
  },
  company: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: false
  },
  subcategory: {
    type: String,
    required: true,
  }

});

// const Productmodel = mongoose.model("Product", DataSchema);
module.exports = Product;
