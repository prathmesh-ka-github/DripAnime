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


// const fs = require('fs')
// let usersdata
// let push = []
// const newObj = {
//     "name":"Chanchal",
//     "email":"chanchu@google.com",
//     "password":"chanchalchapassword"
// }

// const newObj2 = {
//     "name":"Khudsi💺",
//     "email":"khudchi@google.com",
//     "password":"khudsichapassword"
// }

// const newObj3 = {
//     "name":"Prathmesh",
//     "email":"pratham@google.com",
//     "password":"pratham@password"
// }
// const newObj4 = {
//     "name":"Someoone",
//     "email":"someguy@google.com",
//     "password":"guys@password"
// }

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

// try {
//     const jsonstring = fs.readFileSync('./products/data/testdata.json', 'utf-8');
//     const customer = JSON.parse(jsonstring);
//     // Object.assign(customer[0], newObj)
//     customer.push(newObj)
//     console.log(customer)
//     push = customer
// } catch (err) {
//     console.error(err)
// }


// // ! WRITING THE JSON DATA TO FILE WITH FS

// fs.writeFile("./products/data/testdata.json", JSON.stringify(push, null, 2), err => {
//     if (err) {
//         console.log(err.message)
//     } else {
//         console.log('File successfully written!')
//     }
// })

// const placeholder= {
//     "username":"bakati",
//     "email":"bhaktibhatt@outlook.com",
//     "phonenumber":"7345968514",
//     "password":"bhaktichapassword"
// }


// const fs = require('fs')
// let jsonusers

// const input =    {
//     "username":"bakati",
//     "email": "vishallavangare@outlook.com",
//     "phonenumber":"7345968514",
//     "password":"bhaktichapassword"
// }

// try {
//     const users = fs.readFileSync('./products/data/testdata.json', 'utf-8');
//     jsonusers = JSON.parse(users);
// } catch (err) {
//     console.error(err)
// }

// function checkUser(inputuser) {
//     let jsondata
//     let check = 0
//     try {
//         const data = fs.readFileSync('./products/data/users.json', 'utf-8');
//         jsondata = JSON.parse(data);
//         jsondata.forEach(user => {
//             if(inputuser.email === user.email) {
//                 check = 1
//             }
//         });
//     } catch (err) {
//         console.error(err)
//     }
    
//     if (check ==0) {
//         return 0
//     }
//     if(check == 1) {
//         return 1
//     }
// }

// function addUser(user) {
//     let push = []
//     if (user.username !=="" & user.email !=="" & user.phonenumber !=="" & user.password !=="") {
//         try {
//             try {
//                 const data = fs.readFileSync('./products/data/users.json', 'utf-8');
//                 const jsondata = JSON.parse(data);
//                 jsondata.push(user)
//                 push = jsondata
//             } catch (err) {
//                 console.error(err)
//             }
//             fs.writeFile("./products/data/users.json", JSON.stringify(push, null, 4), err => {
//                 if (err) {
//                     console.log(err.message)
//                 } else {
//                     console.log('File successfully written!')
//                 }
//             })  
//             console.log("User added successfully")        
//         } catch (err) {
//             console.error(err.message)
//         }
//     }
// }