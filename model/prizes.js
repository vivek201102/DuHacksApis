const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prizes = new Schema({
    title: { type: String, require: true },
    rewards: { type: Array, require: true }
});

module.exports = mongoose.model("Prizes", prizes);