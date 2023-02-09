const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {
        required: true,
        type: String,
        unique: true
    },

    email: {
        required: true,
        type: String,
        unique: true
    },

    password: {
        required: true,
        type: String,
        unique: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('User', UserSchema);