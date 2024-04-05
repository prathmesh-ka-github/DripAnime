const loginForm = document.getElementById("loginform");
loginForm.addEventListener('submit', submit => {
    submit.preventDefault();
    const formData = {
        "email" : loginForm.email.value,
        "password" : loginForm.password.value
    }
    stringFormData = JSON.stringify(formData)
    fetch("/login", {
        "method": "POST",
        "headers" : {
            "Content-Type":"Application/JSON"
        },
        "body": stringFormData
    })
    .then(res => {
        if (!res.ok) {
            // ! Throws error
            res.json().then(data => {
                console.log(data);
                if (data.err) {
                    var errorlog = document.getElementById("errorlog")
                    errorlog.innerHTML = data.err
                    errorlog.classList.add('visible')
                    function fadein() {
                        errorlog.classList.remove('visible')
                    }
                    setTimeout(fadein, 10000);
                }
            })
        }
        else {
            localStorage.setItem("login","success")
            window.location.replace("/")
        }
    })
})