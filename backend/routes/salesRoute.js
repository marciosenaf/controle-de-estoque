const express = require("express");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
const {
    createSale,
    getSales,
    getSale,
    deleteSale,
    updateSale,
} = require("../controllers/salesController");
const { upload } = require("../utils/fileUpload");

router.post("/", protect, upload.single("image"), createSale);
router.patch("/:id", protect, upload.single("image"), updateSale);
router.get("/", protect, getSales);
router.get("/:id", protect, getSale);
router.delete("/:id", protect, deleteSale);

module.exports = router;
