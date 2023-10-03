const mongoose = require("mongoose");

const superpowerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    }
})

const Superpower = module.exports = mongoose.model("Superpower", superpowerSchema)
