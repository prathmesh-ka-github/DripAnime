// For Mobile Hamburger menu
const ham = document.getElementById('ham');
const hamcontents = document.getElementById('ham-contents');
ham.addEventListener('click', function () {
    console.log('clicked!')
    hamcontents.classList.toggle('active')
})