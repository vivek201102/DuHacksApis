const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sponsors = new Schema({
    name: { type: String, require: true },
    description: { type: String, require: true },
    logoUrl: { type: String, require: true },
    website: {type: String, require: true },
    rewards: { type: Array, require: true }
});

module.exports = mongoose.model("Sponsors", sponsors);