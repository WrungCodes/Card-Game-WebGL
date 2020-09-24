require('dotenv').config()
const express = require('express');
const server = express();

server.use(express.static('public'))

server.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});