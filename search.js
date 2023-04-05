/*
    ? This is the beta testing stage for now, with dummy text.
    //TODO Add img urls and make working cards of products.
    //TODO Now adding products
    TODO  
*/
// For search-bar
const userCardTemplate = document.querySelector("[data-user-template]")
const searchResult = document.querySelector("[search-results]")
const searchInput = document.querySelector("[data-search]")
console.log(searchInput)

let users = []

//! Searching and displaying the search results
searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    // For tshirts
    if (value !== "") {
        users.forEach(user => {
            const isVisible = user.name.toLowerCase().includes(value) || user.tags.toLowerCase().includes(value)
            user.element.classList.toggle("hide",!isVisible)
            // document.querySelector("[search-results]").classList.toggle("hide",!isVisible)
        })
    }
    else if(value == ""){
        users.forEach(user => {
            user.element.classList.add("hide")
        })
        // document.querySelector("[search-results]").classList.toggle("hide")
    }
})

//! Inserting items into DOM using tshirt.JSON file
// for tshirts
fetch('./products/data/tshirt.json')
.then((response) => response.json())
.then(data => {
    users = data.tshirt.map(product => {
            const card = userCardTemplate.content.cloneNode(true).children[0]
            // console.log(product)
            const productImage = card.querySelector("[product-image]")
            const header = card.querySelector('[data-name]')
            const imgurl = product.url
            productImage.innerHTML = `<img src="products/images/${imgurl}.png" alt="${imgurl}">`
            header.textContent = product.name
            searchResult.append(card)
            return{name:product.name, tags:product.tags, element:card}
        });
    });
    
    // for hoodies
// fetch('./products/data/tshirt.json')
//     .then((hresponse) => hresponse.json())
//     .then(hdata => {
//         husers = hdata.hoodie.map(hoodie => {
//             const card = userCardTemplate.content.cloneNode(true).children[0]
//             // console.log(hoodie)
//             const header = card.querySelector('[data-name]')
//             const tags = card.querySelector('[data-tags]')
//             header.textContent = hoodie.name
//             searchResult.append(card)
//             return{hname:hoodie.name, htags:hoodie.tags, helement:card}
//         });
//     });