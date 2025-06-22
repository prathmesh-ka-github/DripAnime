console.log('JS Working!')

const newsletterForm =  document.getElementById('newsletter')

newsletterForm.addEventListener('submit', submit => {
    submit.preventDefault()
    const newsletterEmail = {"email" : newsletterForm.email.value}
    const newsletterEmailJSON = JSON.stringify(newsletterEmail)
    fetch('/newsletter', {
        'method': 'POST',
        "headers" : {
            "Content-Type":"Application/JSON"
        },
        "body": newsletterEmailJSON
    }).then( res => {
        console.log(res.status)

        if (res.status === 400) {
            console.log('Ram Krushna Hari')
            document.getElementById('errordisplay').style.opacity = '1'
        }
        if (res.status === 201) {
            document.getElementById('newsletter-form-container').style.display = "none"
            document.getElementById('greentick').style.display = "block"
            document.getElementById('errordisplay').style.opacity = '0'
        }
    })
})