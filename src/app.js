const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const {MongoDB} = require("./constants/mongoDB");

dotenv.config();
const app = express();
mongoose.connect(MongoDB);
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin: '*'
}));

app.use(express.json({limit: 1024 * 1024 * 100})) //100 Mb

require('./models/Superhero');
require('./models/Superpower');
app.use(require('./routes'))

app.listen(PORT, (error) => {
    if(!error) {
        console.log(`Server side is running on port ${PORT}`)
    } else {
        console.log("Error: ", error)
    }
})

module.exports = app;