const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const { authorization } = req.headers
    if(!authorization) { return res.send('token não enviado!') }
    try {
        const dados = jwt.verify(authorization, process.env.TOKEN_SECRET);
        const { id, email } = dados;
        req.userId = id;
        next();
    } catch(e) {
        console.log(e);
        res.send('token inválido!');
    }

}
