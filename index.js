const express = require('express');
const port = process.env.port || 5000;
const app = express();

// response to send for GET request from browser
app.get('/', (req, res) => {
    res.send('App Working!');
});

// listening for connections to app
app.listen(port, () => { console.log('The App is running!'); });
module.exports = app
