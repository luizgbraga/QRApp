const Product = require('../models/Product');

class ProductController {
    index(req, res) {
        res.send('success!');
    }

    getPlans(req, res) {
        Product.find({}, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }
        });
    }
}

module.exports = new ProductController();