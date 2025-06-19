// For Mobile Hamburger menu
const ham = document.getElementById('ham');
const hamcontents = document.getElementById('ham-contents');
ham.addEventListener('click', function () {
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