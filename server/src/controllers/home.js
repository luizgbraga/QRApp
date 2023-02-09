const QR = require('../models/QR');

class HomeController {
    index(req, res) {
        res.send('success!');
    }
    
    showAll(req, res) {
        QR.find({}, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }
        })
    }

    showQR(req, res) {
        const qrId = req.query.qrId;
        QR.find({ "_id": qrId }, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }
        });
    }

    showScans(req, res) {
        const qrId = req.query.qrId;
        QR.find({ "_id": qrId }, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }
        }).select('scans');
    }

    createQR(req, res) {
        const qrName = req.query.qrName;
        const qr = { "qrName": qrName };
        QR.create(qr, (err, result) => {
            if(err) { res.send(err) }
            else { res.send(result) }
        }); 
    }

    updateScans(req, res) {
        const qrId = req.query.qrId;
        const os = req.query.os;
        const scanDate = Date.now();
        let info = { os, scanDate };
        QR.updateOne({ "_id": qrId }, { $push: { scans: info } }, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }
        })
    }

    createLink(req, res) {
        const qrId = req.query.qrId;
        const os = req.query.os;
        const timeRestriction = req.query.timeRestriction;
        const link = req.query.link;
        let info = { os, timeRestriction, link };
        QR.updateOne({ "_id": qrId }, { $push: { links: info } }, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }
        })
    }

    updateLink(req, res) {
        const qrId = req.query.qrId;
        const linkId = req.query.linkId;
        const newOs = req.query.newOs;
        const newTimeRestriction = req.query.newTimeRestriction;
        const newLink = req.query.newLink;
        QR.updateOne({ "_id": qrId, "links._id": linkId }, { $set: {
            "links.$.os": newOs,
            "links.$.timeRestriction": newTimeRestriction,
            "links.$.link": newLink
        } }, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }
        })
    }

    deleteQR(req, res) {
        const qrId = req.query.qrId;
        QR.deleteOne({ "_id": qrId }, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }
        })
    }
}

module.exports = new HomeController();
