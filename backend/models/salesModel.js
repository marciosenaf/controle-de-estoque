const mongoose = require("mongoose");

const salesSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        name: {
            type: String,
            required: [true, "Please add a name"],
            trim: true,
        },
        id: {
            type: String,
            required: true,
            default: "ID",
            trim: true,
        },
        category: {
            type: String,
            required: [true, "Please add a category"],
            trim: true,
        },
        price: {
            type: String,
            required: [true, "Please add a price"],
            trim: true,
        },
        quantity: {
            type: String,
            required: [true, "Please add a quantity"],
            trim: true,
        },
        total: {
            type: String,
            required: [true, "Please add a total"],
            trim: true,
        },
        amoutpaid: {
            type: String,
            required: [true, "Please add a amoutpaid"],
            trim: true,
        },
        thing: {
            type: String,
            required: [true, "Please add a thing"],
            trim: true,
        },
        receivendpaymant: {
            type: String,
            required: [true, "Please add a receivend paymant"],
            trim: true,
        },
        note: {
            type: String,
            required: [true, "Please add a note"],
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Sales = mongoose.model("Sales", salesSchema);
module.exports = Sales;