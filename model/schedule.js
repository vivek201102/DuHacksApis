const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schedule = new Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    date: { type: String, require: true },
    time: { type: String, require: true },
});

module.exports = mongoose.model("Schedule", schedule);