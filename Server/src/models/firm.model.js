const mongoose = require("mongoose");

const firmSchema = new mongoose.Schema({
    firmName: {
        type: String,
        required: true,
    },
    ownerName: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    area: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "area",
        required: true,
    },
    businessType: {
        type: String,
        required: true,
        enum: ["Shop", "Services", "Manufacturing", "Company", "Other"],
    },
    gstNumber: {
        type: String,
    },
},{
    timestamps: true,
})

const firmModel = mongoose.model("firm", firmSchema);

module.exports = firmModel;