const Product = require('../models/Product');

class ProductController {
    index(req, res) {
        res.send('success!');
    }
}

module.exports = new ProductController();