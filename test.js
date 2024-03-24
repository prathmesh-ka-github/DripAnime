// var users = [
//     {
//         "email":"connect.prathmesh905@gmail.com",
//         "password":"12345678"
//     },
//     {
//         "email":"connect.vivek@gmail.com",
//         "password":"abcdefgh"
//     }
// ]
// // const user = {
// //     "email":"connect.vivek@gmail.com",
// //     "password":"abcdefgh"
// // }

// export function SearchUser(email, password) {
//     let user = {
//         "email" : `${email}`,
//         "password" : `${password}`
//     }
//     let userfound = false;
//     for (let i = 0; i < users.length; i++) {
//         let emailmatched = users[i].email === user.email
//         let passwordmatched = users[i].password === user.password
//         // console.log(i)
//         if (emailmatched && passwordmatched) {
//             console.log('User found!!!')
//             userfound = true;
//             break;
//         }
//         else if(!emailmatched && !passwordmatched){
//             // console.log("Searching")
//             break
//         }
//         else if (emailmatched && !passwordmatched){
//             console.log('Password incorrect')
//         }
//     }
//     if (userfound) {
//         console.log("login sucessful")
//     }
//     // else {
//     //     console.log("Password or email incorrect!")
//     // }
// }

// SearchUser("connect.prathmesh905@gmail.com","12345678")
// console.log(users[0].password === user.password)


const fs = require('fs')
let usersdata
let push = []
const newObj = {
    "name":"Chanchal",
    "email":"chanchu@google.com",
    "password":"chanchalchapassword"
}

const newObj2 = {
    "name":"Khudsi💺",
    "email":"khudchi@google.com",
    "password":"khudsichapassword"
}

const newObj3 = {
    "name":"Prathmesh",
    "email":"pratham@google.com",
    "password":"pratham@password"
}
const newObj4 = {
    "name":"Someoone",
    "email":"someguy@google.com",
    "password":"guys@password"
}

// ! READING THE JSON DATA FILE WITH FS
// ? ReadFile
// ! ERR - parsing and assigning takes time so push array is left empty.

// fs.readFile("./products/data/users.json", 'utf-8', (err, jsonString) => {
//     if (err) {
//         console.error(err.message)
//     } else {
//         try {
//             usersdata = JSON.parse(jsonString);
//             // console.log(usersdata)
//             // usersdata.forEach(e => {
//             //     console.log(e)
//             // })
//             const mergedobj = Object.assign(usersdata[0], newObj)
//             push = usersdata
//             console.log("Push variable - " , push)

//         } catch (error) {
//             console.error(error.message)
//         }
//     }
// })

// ? ReadFileSync

// function 

try {
    const jsonstring = fs.readFileSync('./products/data/testdata.json', 'utf-8');
    const customer = JSON.parse(jsonstring);
    // Object.assign(customer[0], newObj)
    customer.push(newObj)
    console.log(customer)
    push = customer
} catch (err) {
    console.error(err)
}


// ! WRITING THE JSON DATA TO FILE WITH FS

fs.writeFile("./products/data/testdata.json", JSON.stringify(push, null, 2), err => {
    if (err) {
        console.log(err.message)
    } else {
        console.log('File successfully written!')
    }
})


function adduser(user) {
    console.log("user added!!")
}
adduser()