async function getUserDetails() {
    console.log("fetching user details now . . .")
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const address = document.getElementById('address')
    const phone = document.getElementById('phone')
    const useremail = localStorage.getItem('userEmail')

    await fetch('/getuserdetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({useremail})
    }).then(res => {
        res.json().then(data=> {
            console.log(data)
            name.innerHTML = data.username
            email.innerHTML = data.email
            phone.innerHTML = "+1 " + data.phonenumber
            address.innerHTML = data.address
        })
    })
}

if (localStorage.getItem('userEmail')) {
    getUserDetails()
}else {
    window.location.href="/login"
}

function logout() {
    localStorage.removeItem("userEmail");
    window.location.href="/login"
}