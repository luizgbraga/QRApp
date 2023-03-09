const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    userId: {
        type: String
    },

    subscriptionId: {
        type: String
    },

    status: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    code: {
        type: Object
    },

    transactionCode: {
        type: String
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
