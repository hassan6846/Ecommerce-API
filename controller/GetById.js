const Product = require("../models/Product");

const getProductById = async (req, res) => {
    try {
        const { id } = req.params; // Extract ID from request parameters

        // Find the product by ID
        const product = await Product.findById(id);

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

module.exports = getProductById;
