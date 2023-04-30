const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())
const users = [];

app.use(express.static(__dirname + '/'));
app.use(express.urlencoded())


//! ALL GET ENDPOINTS!!!
    //? NAVBAR
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
        app.get('/login', (req,res) => {
            res.status(200)
            res.sendFile( __dirname + '/login.html')
        })
        app.get('/signin', (req,res) => {
            res.status(200)
            res.sendFile( __dirname + '/signin.html')
        })
        app.get('/profile',(req, res)=> {
            res.status(200)
            res.sendFile(__dirname + '/profile.html')
        })

    //?  MAIN AREA OF INDEX
        app.get('/tshirts', (req,res) => {
            res.status(200)
            res.sendFile( __dirname + '/products/tshirt.html')
        })
        
        app.get('/hoodies', (req,res) => {
            res.status(200)
            res.sendFile( __dirname + '/products/hoodie.html')
        })











    app.get('/users', (req,res) => {
        res.json(users);
    })

    //! POST METHODS
    app.post('/signin',(req,res) => {
        console.log(req.body);
        const user = req.body;

        users.push(user)
        res.status(200)
        res.sendFile( __dirname + '/index.html')
    })
    app.post('/login',(req,res) => {
        console.log(req.body);
        const user = req.body;
        
        res.status(200)
        res.sendFile( __dirname + '/index.html')
    })



//! LISTEN
app.listen(port,() => {
    console.log(`Listening to http://localhost:${port}/`)
})