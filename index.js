const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use('/', express.static('/public/build/bundle'));

app.get('/', (req,res) => {
    res.sendfile(path.join(__dirname + '/public/index.html'));
    res.sendfile(path.join(__dirname + '/public/build/bundle.js'));
});

app.listen('PORT', () => {
    console.log(`Работает на ${PORT} порте`)
});