async function getUserDetails() {
    console.log("fetching user details now . . .")
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const address = document.getElementById('address')
    const phone = document.getElementById('phone')
    const useremail = localStorage.getItem('userEmail')

    const edName = document.getElementById('ed-name')
    const edEmail = document.getElementById('ed-email')
    const edAddress = document.getElementById('ed-address')
    const edPhone = document.getElementById('ed-phone')
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

            edName.placeholder = data.username
            edEmail.placeholder = data.email
            edPhone.placeholder = "+1 " + data.phonenumber
            edAddress.placeholder = data.address
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

function showedit() {
    const editpage = document.getElementById('edit-page')
    const profilepage = document.getElementById('profile-page')
    editpage.style.display = 'flex'
    profilepage.style.display = 'none'
}
function showprofile() {
    window.location.href="/profile"
}