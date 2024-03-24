const fs = require('fs')


var signinform = document.getElementById("signinform")

// console.log(signinform.email.value)
// console.log(signinform.username.value)
// console.log(signinform.password.value)
// console.log(signinform.phonenumber.value)



function addUser() {
    let push = []
    const username = signinform.username.value
    const email = signinform.email.value
    const phonenumber = signinform.phonenumber.value
    const password = signinform.password.value
    
    if (username !=="" & email !=="" & phonenumber !=="" & password !=="") {
        try {
            const user = {
                "username" : `${username}`,
                "email" : `${email}`,
                "phonenumber" : `${phonenumber}`,
                "password" : `${password}`
            }

            try {
                const data = fs.readFileSync('./products/data/testdata.json', 'utf-8');
                const jsondata = JSON.parse(data);
                // To edit -  Object.assign(data[0], newObj)
                jsondata.push(user)
                console.log(jsondata)
                push = jsondata
            } catch (err) {
                console.error(err)
            }

            fs.writeFile("./products/data/testdata.json", JSON.stringify(push, null, 4), err => {
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