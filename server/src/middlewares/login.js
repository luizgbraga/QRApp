const jwt = require('jsonwebtoken');

// Checks if session token was sent in the header (ie, if user is logged)
module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if(!authorization) { return res.send('token não enviado!') }
    try {
        const dados = jwt.verify(authorization, process.env.TOKEN_SECRET);
        const { id, email } = dados;
        req.userId = id;
        req.userEmail = email;
        next();
    } catch(e) {
        console.log(e);
        res.send('token inválido!');
    }

}