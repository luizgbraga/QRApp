const Transaction = require('../models/Transaction');

class TransactionController {
    index(req, res) {
        res.send('success!');
    }

    createTransaction(req, res) {
        const transaction = req.body;
        Transaction.create(transaction, (err, result) => {
            if(err) { res.send(err) }
            else { res.send(result) }
        }); 
    }
}

module.exports = new TransactionController();
