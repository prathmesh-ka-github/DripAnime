var search = {};

const users = [
    {
        "email":"connect.prathmesh905@gmail.com",
        "password":"12345678"
    },
    {
        "email":"connect.vivek@gmail.com",
        "password":"abcdefgh"
    }
]

search.user = function SearchUser(email, password) {
    let user = {
        "email" : `${email}`,
        "password" : `${password}`
    }
    let userfound = false;
    for (let i = 0; i < users.length; i++) {
        let emailmatched = users[i].email === user.email
        let passwordmatched = users[i].password === user.password
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

// SearchUser("connect.prathmesh905@gmail.com","12345678")

exports.data = search