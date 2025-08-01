const express = require("express")
const cors = require("cors")
var bcrypt = require("bcryptjs")
var jwt = require('jsonwebtoken')

const app = express();
const port = 3000;


//? MONGODB CONNECTION
const mongoose = require("mongoose")
const { error } = require("console")
mongoose.connect("mongodb+srv://prathmesh:pratham02@dripanimecluster.jayx0yg.mongodb.net/DripanimeDB")
const User = require("./userModal")
const Newsletter = require("./newsletterModal")
const Tshirts = require("./tshirtsModal")
const blogViews = require("./blogviewsModal")

app.use(express.json())
app.use(express.urlencoded({extended : false}));
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


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
            res.status(200)
            res.sendFile( __dirname + '/shoppingcart.html')
        })
        app.get('/product', (req,res) => {
            res.status(200)
            res.sendFile( __dirname + '/product.html')
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
    app.post('/getuserdetails', async (req,res) => {
        try {
            console.log(req.body)
            const useremail = req.body.useremail
            // console.log('getuserdetails api called')
            const user = await User.findOne({ email: useremail });
            // console.log(user)
            res.json(user)
        } catch (err) {
            console.error(err)
        }
    })

    app.get('/products/tshirts', async(req, res) => {
        try {
            let data = await Tshirts.find({},{name:true})
            res.status(200).json(data)
        } catch (err) {
            console.error(err);
            
        }
    })


// ! --------------------------Private Routes------------------------------------
    app.get('/profile', (req, res)=> {
        try {
            res.status(200)
            res.sendFile( __dirname + '/profile.html')
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
                    throw "ERR - Invalid credentials. Wrong password."
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

    app.post('/newsletter', async (req,res,next) => {
        const email = req.body.email
        console.log(email)
        if (await searchNewsletterEmail(email)) {
            res.status(400).json({
                "err":"ERR - User already signed up for newsletter",
                "code":400
            })
        }
        else{
            try {
                await Newsletter.create({email})
                res.status(201).json({
                    'message':'User signed up for newsletter!',
                    'code': 201
                })
            } catch (err) {
                console.error(err)
            }
        }
    })


    // ? BLOG RELATED ENDPOINTS!

    app.get('/blogviews',cors(), async (req, res, next) => {
        let data = await blogViews.find({})
        res.status(200).json(data)
    })

    app.post('/updateblogviews', cors(), async (req, res) => {
        const blog = req.query
        let check = await blogexists(blog.number)
        if (check) {
            let currentViews = (await blogViews.findOne({blog: check})).views
            let newViews = currentViews + 1
            await blogViews.updateOne({blog:check}, {$set : {views : newViews}})
            res.status(200).json({
                'success': 'blog found! and views updated!',
                'blog': blog.number,
                'updated views': newViews,

            })
        }else {
            res.status(400).json({
                "err":"ERR - Blog doesnt exist! Check blognumber and try again.",
                "code":400
            })
        }
    })

    async function blogexists(blognumber) {
        try {
            if (await blogViews.findOne({blog: blognumber}) == null) {
                return 0
            } else {
                return 1
            }
        } catch (err) {
            console.error(err);
        }
    }

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

async function searchNewsletterEmail(email) {
    try {
        if (await Newsletter.findOne({email : email}) == null) {
            return 0
        }
        else if (await Newsletter.findOne({email : email}) !== null){
            return 1
        }
    } catch (err) {
        console.error(err)
    }
}