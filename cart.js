if (localStorage.getItem('userEmail')) {
    getUserDetails()
}else {
    window.location.href="/login"
}