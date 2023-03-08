const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
    linkName: {
        required: true,
        type: String
    },

    short: {
        unique: true,
        type: String
    },

    url: {
        required: true,
        type: String
    },

    relatedQR: {
        required: true,
        type: String
    },

    osName: {
        type: String
    },

    timeRestriction: {
        type: String
    },
    
    hourRestriction: {
        type: String
    },
    
    locRestriction: {
        type: String
    }
});

module.exports = mongoose.model('Link', LinkSchema);