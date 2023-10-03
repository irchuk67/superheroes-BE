const mongoose = require("mongoose");

const superheroSchema = new mongoose.Schema({
    nickname: {
        type: String
    },
    real_name: {
        type: String
    },
    origin_description: {
        type: String
    },
    superpowers: {
        type: [String]
    },
    catch_phrase: {
        type: String
    },
    images:{
        type: [Object]
    }
})

const Superhero = module.exports = mongoose.model("Superhero", superheroSchema)