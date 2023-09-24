const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const theme = new Schema({
    title: { type: String, require: true },
    imageUrl: { type: String, require: true },
});

module.exports = mongoose.model("Theme", theme);