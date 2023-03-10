const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Routes
const QRRoutes = require('./src/routes/qr');
const loginRoutes = require('./src/routes/login');
const linkRoutes = require('./src/routes/link');
const scanRoutes = require('./src/routes/scan');
const subscriptionRoutes = require('./src/routes/subscription');
const transactionRoutes = require('./src/routes/transaction');
const productRoutes = require('./src/routes/product');

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
        this.app.use('/', QRRoutes);
        this.app.use('/', loginRoutes);
        this.app.use('/', linkRoutes);
        this.app.use('/', scanRoutes);
        this.app.use('/', subscriptionRoutes);
        this.app.use('/', transactionRoutes);
        this.app.use('/', productRoutes);

        this.app.use('/api/login/createUser', loginRoutes);
        this.app.use('/api/login/logUser', loginRoutes);
        this.app.use('/api/login/getUser', loginRoutes);
        this.app.use('/api/login/updatePlan', loginRoutes);
        this.app.use('/api/login/deleteUser', loginRoutes);

        this.app.use('/api/qr/createQR', QRRoutes);
        this.app.use('/api/qr/showQR', QRRoutes);
        this.app.use('/api/qr/getQRByShort', QRRoutes);
        this.app.use('/api/qr/showUserQR', QRRoutes);
        this.app.use('/api/qr/updateQR', QRRoutes);
        this.app.use('/api/qr/deleteQR', QRRoutes);

        this.app.use('/api/link/createLink', linkRoutes);
        this.app.use('/api/link/showQRLinks', linkRoutes);
        this.app.use('/api/link/updateLink', linkRoutes);
        this.app.use('/api/link/deleteLink', linkRoutes);

        this.app.use('/api/scan/createScan', scanRoutes);
        this.app.use('/api/scan/showLinkScans', scanRoutes);
        this.app.use('/api/scan/showQRScans', scanRoutes);

        this.app.use('/api/product/getPlans', productRoutes);

        this.app.use('/api/scan/createTransaction', transactionRoutes);
    }
}

module.exports = new App().app;