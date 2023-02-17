class Home {
    index(req, res) {
        res.json({
            testing: 'ok'
        });
    }
}

module.exports = new Home();