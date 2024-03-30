const fs = require("fs")
const express = require("express");
var bcrypt = require("bcryptjs");
const app = express();
const port = 3000;

//? MONGODB CONNECTION
const mongoose = require("mongoose")
const User = require("./userModal")
mongoose.connect("mongodb+srv://prathmesh:pratham02@dripanimecluster.jayx0yg.mongodb.net/DripanimeDB")

app.use(express.json())
app.use(express.urlencoded({extended : false}));

app.use(express.static(__dirname + '/'));

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




    //! -------------- Fetching users -----------------------
    app.get('/users', async (req,res) => {
        try {
            let data = await User.find()
            res.status(200).json(data);
        } catch (err) {
            console.error(err)
        }
    })

//! POST METHODS
    app.post('/signin',(req,res,next) => {
        try {
            const user = req.body;
            console.log("\"94, server.js\"", user )
            if (checkUser(user)) {
                console.log("User not found.")
                console.log("Creating new user.")
                addUser(user)
                res.status(201)
                res.redirect('/login')
            }
            else {
                console.log(checkUser(user))
                console.log("ERR - user found")
                // res.redirect('/signin')
                // 400 - Bad request. Error from client side.
                res.status(400).json({
                    "err":"User already exists, go to login.",
                    "code":400
                })
            }
            next();
        } catch (error) {
            console.error(error);
        }
    })

    app.post('/login', async(req,res,next) => {
        const user = req.body;
        console.log(user)
        let a = await searchUser(user);
        res.json(a) 
        res.status(200)
        // res.redirect('/')
        next();
    })



//! LISTEN
app.listen(port,() => {
    console.log(`Listening to http://localhost:${port}/`)
})

//! === === Functions === === 

async function checkUser(inputuser) {
    let check = 0
    try {
        if (await User.findOne({email : inputuser.email}) !== null) {
            check = 1
        }
    } catch (err) {
        console.error(err)
    }
    return check
}

async function addUser(user) {
    if (user.username !=="" & user.email !=="" & user.phonenumber !=="" & user.password !=="") {
        try {
            let salt = bcrypt.genSaltSync(10)
            let hashedPassword = bcrypt.hashSync(user.password , salt)
            user.password = hashedPassword
            await User.create(user)
            console.log("User added successfully", user)      
        } catch (err) {
            console.error(err.message)
        }
    }
}

async function searchUser(inputuser) {
    try {
        if (await User.findOne({email : inputuser.email}) === null) {
            console.log("No user found, head to register")
            return 0
        }
        if (await User.findOne({email : inputuser.email}) !== null){
            console.log("User found! You can login!")
            return 1
        }
    } catch (err) {
        console.error(err)
    }
}