// const asyncHandler = require("express-async-handler");
// const Sales = require("../models/salesModel");
// const { fileSizeFormatter } = require("../utils/fileUpload");
// const cloudinary = require("cloudinary").v2;

// // Create Sales

// const createSales = asyncHandler(async (req, res) => {
//     const { name, sku, category, quantity, price, description } = req.body;

//     //   Validation
//     if (!name || !category || !quantity || !price || !description) {
//         res.status(400);
//         throw new Error("Please fill in all fields");
//     }

//     // Handle Image upload
//     let fileData = {};
//     if (req.file) {
//         // Save image to cloudinary
//         let uploadedFile;
//         try {
//             uploadedFile = await cloudinary.uploader.upload(req.file.path, {
//                 folder: "Inventory Control",
//                 resource_type: "image",
//             });
//         } catch (error) {
//             res.status(500);
//             throw new Error("Image could not be uploaded");
//         }

//         fileData = {
//             fileName: req.file.originalname,
//             filePath: uploadedFile.secure_url,
//             fileType: req.file.mimetype,
//             fileSize: fileSizeFormatter(req.file.size, 2),
//         };
//     }

//     // Create Sales
//     const sales = await Sales.create({
//         user: req.user.id,
//         name,
//         sku,
//         category,
//         quantity,
//         price,
//         description,
//         image: fileData,
//     });

//     res.status(201).json(sales);
// });

// // Get all Saless
// const getSaless= asyncHandler(async (req, res) => {
//     const saless = await Sales.find({ user: req.user.id }).sort("-createdAt");
//     res.status(200).json(saless);
// });

// // Get single Sales
// const getSales = asyncHandler(async (req, res) => {
//     const sales = await Sales.findById(req.params.id);
//     // if Sales doesnt exist
//     if (!sales) {
//         res.status(404);
//         throw new Error("Sales not found");
//     }
//     // Match Sales to its user
//     if (sales.user.toString() !== req.user.id) {
//         res.status(401);
//         throw new Error("User not authorized");
//     }
//     res.status(200).json(sales);
// });

// // Delete Sales
// const deleteSales = asyncHandler(async (req, res) => {
//     const sales = await Sales.findById(req.params.id);
//     // if Sales doesnt exist
//     if (!sales) {
//         res.status(404);
//         throw new Error("Sales not found");
//     }
//     // Match Sales to its user
//     if (sales.user.toString() !== req.user.id) {
//         res.status(401);
//         throw new Error("User not authorized");
//     }
//     await sales.remove();
//     res.status(200).json({ message: "Sales deleted." });
// });

// // Update Sales
// const updateSales = asyncHandler(async (req, res) => {
//     const { name, category, quantity, price, description } = req.body;
//     const { id } = req.params;

//     const sales = await Sales.findById(id);

//     // if Sales doesnt exist
//     if (!sales) {
//         res.status(404);
//         throw new Error("Sales not found");
//     }
//     // Match Sales to its user
//     if (sales.user.toString() !== req.user.id) {
//         res.status(401);
//         throw new Error("User not authorized");
//     }

//     // Handle Image upload
//     let fileData = {};
//     if (req.file) {
//         // Save image to cloudinary
//         let uploadedFile;
//         try {
//             uploadedFile = await cloudinary.uploader.upload(req.file.path, {
//                 folder: "Inventory Control",
//                 resource_type: "image",
//             });
//         } catch (error) {
//             res.status(500);
//             throw new Error("Image could not be uploaded");
//         }

//         fileData = {
//             fileName: req.file.originalname,
//             filePath: uploadedFile.secure_url,
//             fileType: req.file.mimetype,
//             fileSize: fileSizeFormatter(req.file.size, 2),
//         };
//     }

//     // Update Sales
//     const updatedSales = await Sales.findByIdAndUpdate(
//         { _id: id },
//         {
//             name,
//             category,
//             quantity,
//             price,
//             description,
//             image: Object.keys(fileData).length === 0 ? sales?.image : fileData,
//         },
//         {
//             new: true,
//             runValidators: true,
//         }
//     );

//     res.status(200).json(updatedSales);
// });

// module.exports = {
//     createSales,
//     getSaless,
//     getSales,
//     deleteSales,
//     updateSales,
// };
