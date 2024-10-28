const Product = require("../models/Product");

const CreateProduct = async (req, res) => {
    try {
        const { title, price, priceBefore, description, images, company, category, subcategory } = req.body;

        // Basic validation
        if (!title || !price || !description || !images || !company || !category || !subcategory) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Create a new product instance
        const newProduct = new Product({
            title,
            price,
            priceBefore,
            description,
            images,
            company,
            category,
            subcategory,
        });

        // Save the product to the database
        await newProduct.save();

        // Respond with the created product
        return res.status(201).json({ message: "Product created successfully.", product: newProduct });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred while creating the product." });
    }
};

module.exports = CreateProduct;
