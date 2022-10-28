const dotenv = require("dotenv").config;
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express()

mongoose
.connect(`mongodb+srv://usuario1:usuario1@cluster0.wrtuelt.mongodb.net/Inventory-control?retryWrites=true&w=majority`)
.then(() => {
    console.log("Conectamos ao mongodb")
    app.listen(3000)

}) 
.catch((err) => console.log(err))