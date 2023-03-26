const ham = document.getElementById('ham');
const hamcontents = document.getElementById('ham-contents');
// for (i=0; i<hamcontents.length; i++) {
//     ham.addEventListener('click', function () {
//         hamcontents.classList.toggle('active')
//         console.log('clicked')
//     })
// }
ham.addEventListener('click', function () {
    console.log('clicked!')
    hamcontents.classList.toggle('active')
})