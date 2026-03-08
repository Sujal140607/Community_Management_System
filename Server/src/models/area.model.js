const mongoose = require("mongoose");

const areaSchema = new mongoose.Schema({
    areaName: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
},{
    timestamps: true,
})

const areaModel = mongoose.model("area", areaSchema);

module.exports = areaModel;