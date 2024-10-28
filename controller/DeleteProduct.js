const Product = require("../models/Product");

const deleteProductById = async (req, res) => {
    try {
        const { id } = req.params; // Extract ID from request parameters

        // Find and delete the product by ID
        const deletedProduct = await Product.findByIdAndDelete(id);

        // Check if the product was found and deleted
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found." });
        }

        // Respond with a success message
        return res.status(200).json({ message: "Product deleted successfully." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred while deleting the product." });
    }
};

module.exports = deleteProductById;
