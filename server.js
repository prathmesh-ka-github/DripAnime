const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())
const users = [];

app.use(express.static(__dirname + '/'));


//! ALL GET ENDPOINTS!!!
app.get('/',(req, res) => {
    // res.writeHead(200,{ 'Content-Type':'html' })
    res.status(200)
    res.sendFile( __dirname + '/index.html')
})

app.get('/home', (req,res) => {
    res.status(200)
    res.sendFile( __dirname + '/index.html')
})

app.get('/apparels', (req,res) => {
    res.status(200)
    res.sendFile( __dirname + '/apparels.html')
})

app.get('/anime', (req,res) => {
    res.status(200)
    res.sendFile( __dirname + '/anime.html')
})

app.get('/support', (req,res) => {
    res.status(200)
    res.sendFile( __dirname + '/support.html')
})
app.get('/search', (req,res) => {
    res.status(200)
    res.sendFile( __dirname + '/search.html')
})
app.get('/register', (req,res) => {
    res.status(200)
    res.sendFile( __dirname + '/register.html')
})

app.get('/users', (req,res) => {
    res.json(users);
})






//! LISTEN
app.listen(port,() => {
    console.log(`Listening to http://localhost:${port}/`)
})