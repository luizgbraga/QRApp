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
    }, 

    productFeatures: [{
        feature: { type: String },
    }]
});

module.exports = mongoose.model('Product', ProductSchema);