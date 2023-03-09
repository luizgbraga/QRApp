const Subscription = require('../models/Subscription');

class SubscriptionController {
    index(req, res) {
        res.send('success!');
    }

    createSubscription(req, res) {
        const subscription = req.body;
        Subscription.create(subscription, (err, result) => {
            if(err) { res.send(err) }
            else { res.send(result) }
        }); 
    }

    updateSubscription(req, res) {
        const subscription = req.body;
        Subscription.updateOne({ '_id': subscription.subscriptionId }, subscription, (err, result) => {
            if(err) { res.send(err) }
            else { res.send(result) }
        })
    }
}

module.exports = new SubscriptionController();
