const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const homeRoute = require('./src/routes/home');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/', homeRoute);
    }
}

module.exports = new App().app;