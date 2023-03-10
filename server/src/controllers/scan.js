const Scan = require('../models/Scan');

class ScanController {
    index(req, res) {
        res.send('succ!');
    }

    createScan(req, res) {
        const scan = req.body.params;
        Scan.create(scan, (err, result) => {
            if(err) { res.send(err) }
            else { res.send(result) }
        }); 
    }

    showQRScans(req, res) {
        const { qrId } = req.query;
        Scan.find({ "qrId": qrId }, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }  
        })
    }

    showLinkScans(req, res) {
        const { linkId } = req;
        Scan.find({ "linkId": linkId }, (err, result) => {
            if(err) { res.send(err) } 
            else { res.send(result) }  
        })
    }
}

module.exports = new ScanController();
