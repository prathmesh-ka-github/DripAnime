const express = require('express');
const app = express();
const port = 3000;

// var search = require('./usersearch')
// console.log(search.data.user("connect.prathmesh905@gmail.com","12345678"))
const users = [];

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
        console.log(req.body);
        const user = req.body;

        users.push(user)
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











// !!!!!        SEARCH FUNCTIONS FOR LOGINS         !!!!!
function SearchUser(getuser) {
    let userfound = false;
    for ( i = 0; i < users.length; i++) {
        let emailmatched = users[i].email === getuser.email
        let passwordmatched = users[i].password === getuser.password
        // console.log(i)
        if (emailmatched && passwordmatched) {
            console.log('User found!!!')
            userfound = true;
            break;
        }
        else if(!emailmatched && !passwordmatched){
            // console.log("Searching")
            break
        }
        else if (emailmatched && !passwordmatched){
            console.log('Password incorrect')
        }
    }
    if (userfound) {
        console.log("login sucessful")
    }
    // else {
    //     console.log("Password or email incorrect!")
    // }
}
