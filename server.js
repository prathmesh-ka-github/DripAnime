const express = require('express');
const app = express();
const port = 3000;
const path = require('path')
app.use(express.json())

const users = [];

app.use(express.static(__dirname + '/'));

app.get('/',(req, res) => {
    // res.writeHead(200,{ 'Content-Type':'html' })
    res.sendFile( __dirname + '/index.html')
})

app.get('/users', (req,res) => {
    res.json(users);
})

app.listen(port,() => {
    console.log(`Listening to http://localhost:${port}/`)
})