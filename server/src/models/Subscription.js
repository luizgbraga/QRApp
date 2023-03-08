const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
    productId: {
        required: true,
        type: String
    },

    userId: {
        required: true,
        type: String
    },

    price: {
        required: true,
        type: String
    },

    status: {
        required: true,
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Subscription', SubscriptionSchema);