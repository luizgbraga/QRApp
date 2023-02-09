const User = require('../models/User');

class LoginController {
    showAll(req, res) {
        User.find({}, (err, result) => {
            res.send(result);
        })
    }

    createUser(req, res) {
        const user = req.body;
        User.create(user, (err, result) => {
            if(err) { res.send(err)
            console.log(err) }
            else { res.send(result) }
        });
    }

    deleteUser(req, res) {
        const userId = req.query.userId;
        User.deleteOne({ "_id": userId }, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }
        })
    }
}

module.exports = new LoginController();
