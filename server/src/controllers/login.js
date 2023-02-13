const User = require('../models/User');
const jwt = require('jsonwebtoken');

class LoginController {
    /* Showing all users should not be possible for any user

    showAll(req, res) {
        User.find({}, (err, result) => {
            res.send(result);
        })
    }
    */

    createUser(req, res) {
        const user = req.body;
        User.create(user, (err, result) => {
            if(err) { res.send(err) }
            else { res.send(result) }
        });
    }

    logUser(req, res) {
        const { email, password } = req.body;
        console.log(req.body)
        User.findOne({ email }, (err, result) => {
            if(err || !result) { return res.send(err) }
            else { 
                result.comparePassword(password, result.password, (err, isMatch) => {
                    if(err) { 
                        console.log('erro')
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

    getUser(req, res) {
        const userId = req.userId;
        User.findOne({ "_id": userId }, (err, result) => {
            if(err) { res.send(err) }
            else { res.send(result) }
        })
    }

    deleteUser(req, res) {
        const userId = req.userId;
        User.deleteOne({ "_id": userId }, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }
        })
    }
}

module.exports = new LoginController();
