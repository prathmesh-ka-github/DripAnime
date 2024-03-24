require("dotenv").config()
const fs = require('fs')
const express = require('express');
const app = express();
const port = 3000;


app.use(express.json())

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
        app.get('/product-tshirts', (req,res) => {
            res.status(200)
            res.sendFile( __dirname + '/tshirt.html')
        })
        
        app.get('/product-hoodies', (req,res) => {
            res.status(200)
            res.sendFile( __dirname + '/hoodie.html')
        })









        app.get('/users', (req,res) => {
            res.json(users);
        })

//! POST METHODS
    app.post('/signin',(req,res,next) => {
        // console.log(req.body);
        const user = req.body;
        addUser(user)

        res.status(200)
        res.redirect('/login')
        next();
    })

    app.post('/login',(req,res,next) => {
        console.log(req.body);
        const user = req.body;
        SearchUser(user);
        
        res.status(200)
        res.redirect('/')
        next();
    })



//! LISTEN
app.listen(port,() => {
    console.log(`Listening to http://localhost:${port}/`)
})









function addUser(user) {
    let push = []

    if (user.username !=="" & user.email !=="" & user.phonenumber !=="" & user.password !=="") {
        try {
            try {
                const data = fs.readFileSync('./products/data/users.json', 'utf-8');
                const jsondata = JSON.parse(data);
                // To edit -  Object.assign(data[0], newObj)
                jsondata.push(user)
                console.log(jsondata)
                push = jsondata
            } catch (err) {
                console.error(err)
            }

            fs.writeFile("./products/data/users.json", JSON.stringify(push, null, 4), err => {
                if (err) {
                    console.log(err.message)
                } else {
                    console.log('File successfully written!')
                }
            })


            console.log(user)
            console.log("User added successfully")        
        } catch (err) {
            console.error(err.message)
        }
    }
}