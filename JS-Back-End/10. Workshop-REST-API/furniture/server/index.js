const express = require('express');
const mongoose = require('mongoose');

start();

async function start() {
    await new Promise((resolve, reject) => {
        mongoose.connect('mongodb://0.0.0.0:27017/furniture-rest', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const db = mongoose.connection;
        db.once('open', () => {
            console.log('Database connected.');
            resolve();
        });
        db.on('error', (err) => {
            reject(err);
        });
    });

    const app = express();

    app.get('/', (req, res) => res.send('It works!'));
    
    app.listen(5000, () => console.log('REST Service is running on port 5000'));
}