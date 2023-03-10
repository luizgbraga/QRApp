const QR = require('../models/QR');

const shortMiddleware = (req, res, next) => {
    let short = [...Array(4)].map(i => (~~(Math.random()*36)).toString(36)).join('');
    QR.exists({ "short": short }, (err, result) => {
        if(err) { res.send(err) } 
        else {
            if(!result) {
                req.short = short;
                next(); 
            } else {
                console.log(result)
                shortMiddleware(req, res, next);
            }
        }  
    })
}

module.exports = shortMiddleware;
