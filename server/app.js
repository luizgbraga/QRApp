const express = require('express');
const homeRoutes = require('./src/routes/home');
const loginRoutes = require('./src/routes/login');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cookieParser());
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        this.app.use('/', homeRoutes);
        this.app.use('/api/qr/showAll', homeRoutes);
        this.app.use('/api/qr/showQR', homeRoutes);
        this.app.use('/api/qr/showUserQR', homeRoutes);
        this.app.use('/api/qr/showScans', homeRoutes);
        this.app.use('/api/qr/createQR', homeRoutes);
        this.app.use('/api/qr/deleteQR', homeRoutes);
        this.app.use('/api/qr/updateScans', homeRoutes);
        this.app.use('/api/qr/createLink', homeRoutes);
        this.app.use('/api/qr/updateLink', homeRoutes);
        this.app.use('/', loginRoutes);
        // this.app.use('/api/login/showAll', loginRoutes);
        this.app.use('/api/login/createUser', loginRoutes);
        this.app.use('/api/login/logUser', loginRoutes);
        this.app.use('/api/login/getUser', loginRoutes);
        this.app.use('/api/login/deleteUser', loginRoutes);
    }
}

module.exports = new App().app;