const express = require("express")
var bcrypt = require("bcryptjs")
var jwt = require('jsonwebtoken')

const app = express();
const port = 3000;


//? MONGODB CONNECTION
const mongoose = require("mongoose")
const { error } = require("console")
mongoose.connect("mongodb+srv://prathmesh:pratham02@dripanimecluster.jayx0yg.mongodb.net/DripanimeDB")
const User = require("./userModal")

app.use(express.json())
app.use(express.urlencoded({extended : false}));
app.use(express.static(__dirname + '/'));

//! ALL GET ENDPOINTS
    //? NAVBAR
        app.get('/',(req, res) => {
            // res.writeHead(200,{ 'Content-Type':'html' })
            res.status(200)
            res.sendFile( __dirname + '/index.html')
        })

        app.get('/error', (req,res) => {
            res.status(200)
            res.sendFile( __dirname + '/error.html')
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
        app.get('/shopping-cart',(req, res) => {
            res.redirect('/login')
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

    //! -------------------------- Fetching users -------------------------------------
    app.get('/users', async (req,res) => {
        try {
            let data = await User.find({}, {_id : true})
            res.status(200).json(data);
        } catch (err) {
            console.error(err)
        }
    })

    // ! --------------------------Private Routes------------------------------------
    app.get('/profile', (req, res)=> {
        try {
            let data = {
                data : "User Profile!"
            }
            res.status(200).json(data);
        } catch (err) {
            console.error(err)
        }
    })

//! ------------------------------POST METHODS---------------------------------------
    app.post('/signin', async (req,res,next) => {
        try {
            const user = req.body;
            let result = await checkUser(user)
            if(result) {
                user.token = "none"
                console.log("User not found...Creating new user.")
                addUser(user)
                res.status(201)
                res.redirect('/login')
            }
            else {
                console.log("ERR - user found")
                // res.redirect('/signin')
                // 400 - Bad request. Error from client side.
                res.status(400).json({
                    "err":"ERR - User already exists! Try again or head to login.",
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
        // console.log(user)
        if (await searchUser(user)) {
            try {
                const dbuser = await User.findOne({email : user.email})
                let checkpass = bcrypt.compareSync(user.password, dbuser.password)
                if (checkpass) {
                    var token = jwt.sign({id : dbuser._id}, 'secretkey');
                    await User.updateOne({email: user.email}, {$set:{token: token}})
                    console.log("successfully logged in!")
                    res.redirect('/')
                }
                else {
                    throw "Invalid credentials. Wrong password."
                }
            } catch (err) {
                res.status(401).json({
                    "err":"ERR - Invalid Credentials! Try again or head to signin.",
                    "code":401
                })
                console.log(err)
            }
        } else {
            res.status(400).json({
                "err":"ERR - Invalid Credentials! Try again or head to signin.",
                "code":400
            })
        }
        next();
    })





//! LISTEN
app.listen(port,() => {
    console.log(`Listening to http://localhost:${port}/`)
})








//! === === Functions === === 

async function checkUser(inputuser) {
    try {
        if (await User.findOne({email : inputuser.email}) !== null) {
            return 0
        }
        else {
            return 1
        }
    } catch (err) {
        console.error(err)
    }
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
        if (await User.findOne({email : inputuser.email}) == null) {
            return 0
        }
        else if (await User.findOne({email : inputuser.email}) !== null){
            return 1
        }
    } catch (err) {
        console.error(err)
    }
}