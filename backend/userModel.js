const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please add a name"]
    },
    email: {
        type: String,
        required: [true, "Please add a email"]
    }

}) 

const User = mongoose.model("User", userSchema)
module.exports = User