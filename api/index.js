const express = require('express');

const app = express();

app.get('*', (req, res) => {
    console.log('hello');
    res.send({ message: 'Hello' });
});

module.exports = app;
