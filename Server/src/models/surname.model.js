const mongoose = require("mongoose");

const surnameSchema = new mongoose.Schema({
    surname: {
        type: String,
        required: true,
    },
    category: String,
    notes: String,
},{
    timestamps: true,
})