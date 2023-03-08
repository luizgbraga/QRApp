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

    belongsTo: {
        required: true,
        type: String
    },

    defaultLink: {
        required: true,
        type: String
    },

    links: [{
        linkName: { type: String },
        osName: { type: String },
        timeRestriction: { type: String },
        hourRestriction: { type: String },
        locRestriction: { type: String },
        link: { type: String },
        short: { 
            type: String,
            unique: true
        }
    }],

    scans: [{
        osName: { type: String },
        scanDate: { type: Date },
        scanLocation: { type: String },
        redirectedTo: { type: String }
    }]
});

module.exports = mongoose.model('QR', QRSchema);