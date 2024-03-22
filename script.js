// For Mobile Hamburger menu
const ham = document.getElementById('ham');
const hamcontents = document.getElementById('ham-contents');
ham.addEventListener('click', function () {
    console.log('clicked!')
    hamcontents.classList.toggle('active')
})

// pre-loader script
const loader = document.querySelector(".loader-container-main")
window.addEventListener("load",function(){
    setTimeout(() => {
        loader.style.opacity = "0"
    }, 100);
    setTimeout(() => {
        loader.style.display = "none"
    }, 300);
})

// var usernames = [
//     {
//         "id":"1",
//         "username":"pratham",
//         "email":"",
//         "phone":"",
//         "password":"1234",
//     }
// ]
// console.log (usernames)

// function register() {
//     var signinform = document.getElementById("signinform")
//     var length = usernames.length + 1
//     usernames ={...usernames, 1 : {username : signinform.username.value}}
//     // usernames[1].email = signinform.email.value
//     usernames[0].phone = signinform.phonenumber.value
//     usernames[0].password = signinform.password.value
//     // console.log(signinform.username.value)
//     console.log(usernames)

// }

