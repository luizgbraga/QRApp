const QR = require('../models/QR');

class QRController {
    index(req, res) {
        res.send('success!');
    }

    createQR(req, res) {
        const qr = req.body;
        QR.create(qr, (err, result) => {
            if(err) { res.send(err) }
            else { res.send(result) }
        }); 
    }

    showUserQRs(req, res) {
        const { userId } = req;
        QR.find({ "userId": userId }, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }  
        })
    }

    showQR(req, res) {
        const { qrId } = req.query;
        QR.find({ "_id": qrId }, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }
        });
    }

    updateQR(req, res) {
        const qr = req.body.params;
        QR.updateOne({ '_id': qr.qrId }, qr, (err, result) => {
            if(err) { res.send(err) }
            else { res.send(result) }
        })
    }

    deleteQR(req, res) {
        const { qrId } = req.query;
        QR.deleteOne({ '_id': qrId }, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }
        })
    }
}

module.exports = new QRController();
