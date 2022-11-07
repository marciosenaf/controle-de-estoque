const dotenv = require("dotenv").config;
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express()

//Middlewares
app.use(express.json())

app.use(express.urlencoded({
    extended: false
}))

app.use = (bodyParser.json())

//routes 
app.get("/", (req, res) => {
    res.send("Home Page")
})

mongoose
    .connect(`mongodb+srv://usuario1:usuario1@cluster0.wrtuelt.mongodb.net/Inventory-control?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Conectado ao mongodb")
        app.listen(3000)
    })
    .catch((err) => console.log(err))