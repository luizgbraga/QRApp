const app = require('./app');
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('Conectado!');
        app.emit('ready');
    })
    .catch((err) => console.log(err))

const port = 3001;
app.on('ready', () => {
    app.listen(port, () => {
        console.log('Escutando...');
    })
})
