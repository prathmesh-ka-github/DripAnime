/*

    ? This is the beta testing stage for now, with dummy text and JSON as a DB.
    //TODO Add img urls and make working cards of products.
    //TODO Now adding products
    //TODO Rendering tshirts in tshirt section
    //TODO Rendering hoodies in hoodies section 
    TODO Collect and make content jackets, full sleeves and oversized tshirt sections.
    TODO Rendering Jackets in Jackets section
    TODO Rendering Full sleeve Tshirt in Full sleeve Tshirt section.

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
    // For tshirts
    if (value !== "") {
        users.forEach(user => {
            const isVisible = user.name.toLowerCase().includes(value) || user.tags.toLowerCase().includes(value)
            user.element.classList.toggle("hide", !isVisible)
        })
    }
    // For hoodies
    if (value !== "") {
        husers.forEach(huser => {
            const ishVisible = huser.hname.toLowerCase().includes(value) || huser.htags.toLowerCase().includes(value)
            huser.helement.classList.toggle("hide", !ishVisible)
        })
    }
    else if (value == "") {
        users.forEach(user => {
            user.element.classList.add("hide")
        })
        husers.forEach(huser => {
            huser.helement.classList.add("hide")
        })
    }
})

//! Inserting cards into DOM using products.JSON file
// for tshirts
fetch('./products/data/products.json')
    .then((response) => response.json())
    .then(data => {
        users = data.tshirt.map(product => {
            const card = userCardTemplate.content.cloneNode(true).children[0]
            const productImage = card.querySelector("[product-image]")
            const header = card.querySelector('[data-name]')
            const imgurl = product.url
            productImage.innerHTML = `<img src="products/images/${imgurl}.png" alt="${imgurl}">`
            header.textContent = product.name
            searchResult.append(card)
            return { name: product.name, tags: product.tags, element: card }
        });
    });

// for hoodies
fetch('./products/data/products.json')
    .then((hresponse) => hresponse.json())
    .then(hdata => {
        husers = hdata.hoodie.map(hoodie => {
            const card = userCardTemplate.content.cloneNode(true).children[0]
            const productImage = card.querySelector("[product-image]")
            const header = card.querySelector('[data-name]')
            const imgurl = hoodie.url
            productImage.innerHTML = `<img src="products/images/${imgurl}.png" alt="${imgurl}">`
            header.textContent = hoodie.name
            searchResult.append(card)
            return { hname: hoodie.name, htags: hoodie.tags, helement: card }
        });
    });