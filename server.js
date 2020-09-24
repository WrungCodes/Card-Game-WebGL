require('dotenv').config()

const express = require('express');
const server = express();

var corsUrl;

if (process.env.NODE_ENV === 'development') {
    corsUrl = process.env.LOCAL_URL  // http://localhost:8080
} else if (process.env.NODE_ENV === 'production') {
    corsUrl = process.env.DEPLOY_URL // https://naijawhot.herokuapp.com/api/v1
}

server.use(cors({
    origin: corsUrl
}))

server.use(express.static('public'))

server.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});