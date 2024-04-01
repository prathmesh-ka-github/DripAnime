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
    }).then(res => {
        if (!res.ok) {
            res.json().then(data => {
                console.log(data);
                if (data.err) {
                    var errorlog = document.getElementById("errorlog")
                    errorlog.classList.add('visible')
                }
            })
        }
        else {
            window.location.replace("/")
        }
    })
})