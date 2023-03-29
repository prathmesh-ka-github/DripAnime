const ham = document.getElementById('ham');
const hamcontents = document.getElementById('ham-contents');
ham.addEventListener('click', function () {
    console.log('clicked!')
    hamcontents.classList.toggle('active')
})


fetch('./tshirt.json')
    .then((response) => response.json())
    .then((data) => console.log(data.hoodie[0].id));