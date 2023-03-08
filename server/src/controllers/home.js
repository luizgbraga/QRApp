const QR = require('../models/QR');

class HomeController {
    index(req, res) {
        res.send('success!');
    }

    //  ** All QR Code related methods **

    /* Showing all QR Codes should not be possible for any user

    showAll(req, res) {
        QR.find({}, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }
        })
    }
    */

    // Given all information about the new QR Code, creates new QR Code associated to logged user
    createQR(req, res) {
        const qr = req.body;
        QR.create(qr, (err, result) => {
            if(err) { res.send(err) }
            else { res.send(result) }
        }); 
    }

    // By user's id saved in JWT Token, returns all QR Codes belonging to him
    showUserQR(req, res) {
        const userId = req.userId;
        QR.find({ "belongsTo": userId }, (err, result) => {
            if(err) { res.send(err) } 
            else { res.json(result) }  
        })
    }

    // Given the QR id as a query param, returns all informations about the QR Code
    showQR(req, res) {
        const qrId = req.query.qrId;
        QR.find({ "_id": qrId }, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }
        });
    }

    // Given the QR id, updates its name 
    updateQR(req, res) {
        const newQRName = req.body.params.newQRNAme;
        const qrId = req.body.params.qrId;
        QR.updateOne({ "_id": qrId }, { $set: { qrName: newQRName } }, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }
        })
    }

    // Given the QR id as a query param, deletes it
    deleteQR(req, res) {
        const qrId = req.query.qrId;
        QR.deleteOne({ "_id": qrId }, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }
        })
    }

    //  ** All Link related methods **

    createLink(req, res) {
        const { linkName, osName, timeRestriction, hourRestriction, locRestriction, link } = req.body.params;
        const qrId = req.body.params.qrId;
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


    //  ** All Scans related methods **

    // Responsible to push scan information everytime the QR Code is scanned
    updateScans(req, res) {
        const qrId = req.query.qrId;
        const osName = req.body.params.osName;
        const scanLocation = req.body.params.scanLocation;
        const scanDate = Date.now();
        let info = { osName, scanDate, scanLocation };
        QR.updateOne({ "_id": qrId }, { $push: { scans: info } }, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }
        })
    }

}

module.exports = new HomeController();
