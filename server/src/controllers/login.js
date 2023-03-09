const User = require('../models/User');
const jwt = require('jsonwebtoken');

class LoginController {
    // Given all information, creates new user
    createUser(req, res) {
        const user = req.body;
        User.create(user, (err, result) => {
            if(err) { res.send(err) }
            else { res.send(result) }
        });
    }

    // Authenticate user by email and password
    logUser(req, res) {
        const { email, password } = req.body;
        User.findOne({ email }, (err, result) => {
            if(err || !result) { return res.send('não existe!') }
            else { 
                result.comparePassword(password, result.password, (err, isMatch) => {
                    if(err) { 
                        return res.send(err) }
                    if(isMatch) {
                        const { id } = result;
                        const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
                            expiresIn: process.env.TOKEN_EXPIRATION
                        });
                        return res.json(token)
                    } else { return res.send('credenciais inválidas!') }
                });
            }
        });
    }

    // Given an id, returns the user associated to it
    getUser(req, res) {
        const userId = req.userId;
        User.findOne({ "_id": userId }, (err, result) => {
            if(err) { res.send(err) }
            else { res.send(result) }
        })
    }

    // Updates user plan to a different one
    updatePlan(req, res) {
        const userId = req.userId;
        const newPlan = req.query.newPlan;
        User.updateOne({ "_id": userId }, { $set: {
            "plan": newPlan
        } }, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }
        })
    }

    // Given the id, deletes the user associated to it
    deleteUser(req, res) {
        const userId = req.userId;
        User.deleteOne({ "_id": userId }, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }
        })
    }
}

module.exports = new LoginController();
