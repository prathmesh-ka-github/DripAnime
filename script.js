const ham = document.getElementById('ham');
const hamcontents = document.getElementById('ham-contents');
ham.addEventListener('click', function () {
    console.log('clicked!')
    hamcontents.classList.toggle('active')
})
const userCardTemplate = document.querySelector("[data-user-template]")
const searchResult = document.querySelector("[search-results]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible = user.name.toLowerCase().includes(value) || user.tags.toLowerCase().includes(value)
        user.element.classList.toggle("hide",!isVisible)
        // console.log(user.tags)
    })
    husers.forEach(huser => {
        const isVisible = huser.hname.toLowerCase().includes(value) || huser.htags.toLowerCase().includes(value)
        huser.helement.classList.toggle("hide",!isVisible)
        // console.log(huser.htags)
    })
})

fetch('./products/data/tshirt.json')
    .then((response) => response.json())
    .then(data => {
        users = data.tshirt.map(product => {
            const card = userCardTemplate.content.cloneNode(true).children[0]
            // console.log(product)
            const header = card.querySelector('[data-name]')
            const tags = card.querySelector('[data-tags]')
            header.textContent = product.name
            tags.textContent = product.tags
            searchResult.append(card)
            return{name:product.name, tags:product.tags, element:card}
        });
    });

fetch('./products/data/tshirt.json')
    .then((hresponse) => hresponse.json())
    .then(hdata => {
        husers = hdata.hoodie.map(hoodie => {
            const card = userCardTemplate.content.cloneNode(true).children[0]
            // console.log(hoodie)
            const header = card.querySelector('[data-name]')
            const tags = card.querySelector('[data-tags]')
            header.textContent = hoodie.name
            tags.textContent = hoodie.tags
            searchResult.append(card)
            return{hname:hoodie.name, htags:hoodie.tags, helement:card}
        });
    });