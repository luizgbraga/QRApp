const Link = require('../models/Link');

class LinkController {
    index(req, res) {
        res.send('sucs!');
    }

    createLink(req, res) {
        const link = req.body;
        console.log(link)
        Link.create(link, (err, result) => {
            if(err) { res.send(err) }
            else { res.send(result) }
        }); 
    }
    
    showQRLinks(req, res) {
        const { qrId } = req.query;
        Link.find({ "qrId": qrId }, (err, result) => {
            if(err) { res.send(err) } 
            else { 
                res.send(result) }  
        })
    }

    updateLink(req, res) {
        const link = req.body.params;
        Link.updateOne({ '_id': link.linkId }, link, (err, result) => {
            if(err) { res.send(err) }
            else { res.send(result) }
        })
    }

    deleteLink(req, res) {
        const { linkId } = req.query;
        Link.deleteOne({ '_id': linkId }, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }
        })
    }
}

module.exports = new LinkController();
