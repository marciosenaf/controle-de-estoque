const asyncHandler = require("express-async-handler");
const Sales = require("../models/salesModel");
const { fileSizeFormatter } = require("../utils/fileUpload");
const cloudinary = require("cloudinary").v2;


// Create Prouct
const createSale = asyncHandler(async (req, res) => {
    const { name, codigo, category, price, quantity, total, payment, thing, note  } = req.body;

    //   Validation
    if (!name || !category || !price || !quantity || !total ) {
        res.status(400);
        throw new Error("Please fill in all fields");
    }

    // Handle Image upload
    let fileData = {};
    if (req.file) {
        // Save image to cloudinary
        let uploadedFile;
        try {
            uploadedFile = await cloudinary.uploader.upload(req.file.path, {
                folder: "Inventory Control",
                resource_type: "image",
            });
        } catch (error) {
            res.status(500);
            throw new Error("Image could not be uploaded");
        }

        fileData = {
            fileName: req.file.originalname,
            filePath: uploadedFile.secure_url,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2),
        };
    }

    // Create Product
    const product = await Sales.create({
        user: req.user.id,
        name,
        codigo,
        category,
        quantity,
        total,
        method,
        payment,
        thing,
        note,
        image: fileData,
    });

    res.status(201).json(product);
});

// Get all Products
const getSales = asyncHandler(async (req, res) => {
    const products = await Sales.find({ user: req.user.id }).sort("-createdAt");
    res.status(200).json(products);
});

// Get single product
const getSale = asyncHandler(async (req, res) => {
    const product = await Sales.findById(req.params.id);
    // if product doesnt exist
    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }
    // Match product to its user
    if (product.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }
    res.status(200).json(product);
});

// Delete Product
const deleteSale = asyncHandler(async (req, res) => {
    const product = await Sales.findById(req.params.id);
    // if product doesnt exist
    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }
    // Match product to its user
    if (product.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }
    await product.remove();
    res.status(200).json({ message: "Product deleted." });
});

// Update Product
const updateSale = asyncHandler(async (req, res) => {
    const { name, category, price, quantity, total, method,  payment, thing, note  } = req.body;
    const { id } = req.params;

    const product = await Sales.findById(id);

    // if product doesnt exist
    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }
    // Match product to its user
    if (product.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }

    // Handle Image upload
    let fileData = {};
    if (req.file) {
        // Save image to cloudinary
        let uploadedFile;
        try {
            uploadedFile = await cloudinary.uploader.upload(req.file.path, {
                folder: "Inventory Control",
                resource_type: "image",
            });
        } catch (error) {
            res.status(500);
            throw new Error("Image could not be uploaded");
        }

        fileData = {
            fileName: req.file.originalname,
            filePath: uploadedFile.secure_url,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2),
        };
    }

    // Update Product
    const updatedProduct = await Sales.findByIdAndUpdate(
        { _id: id },
        {
            name,
            category,
            price,
            quantity,
            total,
            method,
            payment,
            thing,
            note,
            image: Object.keys(fileData).length === 0 ? product?.image : fileData,
        },
        {
            new: true,
            runValidators: true,
        }
    );

    res.status(200).json(updatedProduct);
});

module.exports = {
    createSale,
    getSales,
    getSale,
    deleteSale,
    updateSale,
};
