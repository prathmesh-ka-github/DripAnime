const signupform = document.getElementById("signinform");
signupform.addEventListener('submit', submit => {
    submit.preventDefault();
    const formData = {
        "username" : signupform.username.value,
        "email" : signupform.email.value,
        "phonenumber" : signupform.phonenumber.value,
        "password" : signupform.password.value
    }
    stringFormData = JSON.stringify(formData)
    fetch("/signin", {
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
                    function fadein() {
                        errorlog.classList.remove('visible')
                    }
                    setTimeout(fadein, 10000);
                }
            })
        }
        else {
            window.location.replace("/login")
        }
    })
})