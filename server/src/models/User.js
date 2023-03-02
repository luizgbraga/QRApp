const mongoose = require('mongoose');
SALT_WORK_FACTOR = 10;
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    userName: {
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

    plan: {
        type: String,
        default: 'Gratuito'
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
});

UserSchema.pre("save", function (next) {
    const user = this
    if (!user.isModified('password')) return next();
  
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if(err) { return next(err) };
        bcrypt.hash(user.password, salt, (err, hash) => {
            if(err) { return next(err); }
            user.password = hash;
            next();
        })
    })
});

UserSchema.methods.comparePassword = (candidatePassword, userPassword, cb) => {
    console.log(this)
    bcrypt.compare(candidatePassword, userPassword, (err, isMatch) => {
        if (err) { return cb(err) }
        else { cb(null, isMatch) };
    });
};

module.exports = mongoose.model('User', UserSchema);