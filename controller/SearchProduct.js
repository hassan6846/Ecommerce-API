const Product = require("../models/Product");

const getProductByTitle = async (req, res) => {
    try {
        const { title } = req.params; // Extract title from request parameters

        // Find the product by title (case insensitive)
        const product = await Product.findOne({ title: new RegExp(title, "i") });

        // Check if the product exists
        if (!product) {
            return res.status(404).json({ message: "Product not found." });
        }

        // Respond with the product
        return res.status(200).json(product);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred while retrieving the product." });
    }
};

module.exports = getProductByTitle;
