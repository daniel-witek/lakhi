// modules =================================================
const express = require('express');
const app = express();

// set variables
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Welcome to Tutorialspoint!'));

//defining route
app.get('/tproute', function (req, res) {
    res.send('This is routing for the application developed using Node and Express...');
 });

// startup our app at http://localhost:3000
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));