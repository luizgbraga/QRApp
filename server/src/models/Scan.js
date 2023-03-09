const mongoose = require('mongoose');

const ScanSchema = new mongoose.Schema({
    redirectedTo: {
        required: true,
        type: String
    },

    qrId: {
        required: true,
        type: String
    },
    
    osName: {
        type: String
    },

    scanDate: {
        type: Date
    },

    scanLocation: {
        type: String
    },

    success: {
        type: Boolean
    }
});

module.exports = mongoose.model('Scan', ScanSchema);