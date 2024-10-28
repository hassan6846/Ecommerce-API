const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
    try {
        // Retrieve all products from the database
        const products = await Product.find();

        // Respond with the list of products
        return res.status(200).json(products);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred while retrieving products." });
    }
};

module.exports = getAllProducts;
