const mongoose = require('mongoose');

const QRSchema = new mongoose.Schema({
    qrName: {
        required: true,
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    userId: {
        required: true,
        type: String
    },

    defaultLink: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('QR', QRSchema);