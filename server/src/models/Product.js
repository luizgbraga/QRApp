const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: {
        required: true,
        unique: true,
        type: String
    },

    productPrice: {
        required: true,
        type: Number
    }
});

module.exports = mongoose.model('Product', ProductSchema);