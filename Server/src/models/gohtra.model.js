const mongoose = require("mongoose");

const gohtraSchema = new mongoose.Schema({
    gohtraName: {
        type: String,
        required: true,
    },
    gohtraDescription: String,
    originNotes: String,
    originDate: String,
},{
    timestamps: true,
})

const gohtraModel = mongoose.model("gohtra", gohtraSchema);

module.exports = gohtraModel;