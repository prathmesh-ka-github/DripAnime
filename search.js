/*
    This is the beta testing stage for now with dummy text.

    TODO Add img urls and make working cards of products.
*/
// For search-bar
const userCardTemplate = document.querySelector("[data-user-template]")
const searchResult = document.querySelector("[search-results]")
const searchInput = document.querySelector("[data-search]")

let users = []
let husers = []

//! Searching and displaying the search results
searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    // for tshirts
    users.forEach(user => {
        const isVisible = user.name.toLowerCase().includes(value) || user.tags.toLowerCase().includes(value)
        user.element.classList.toggle("hide",!isVisible)
    })
    // for hoodies
    husers.forEach(huser => {
        const isVisible = huser.hname.toLowerCase().includes(value) || huser.htags.toLowerCase().includes(value)
        huser.helement.classList.toggle("hide",!isVisible)
    })
})

//! Inserting items into DOM using tshirt.JSON file
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