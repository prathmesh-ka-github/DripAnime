const userCardTemplate = document.querySelector("[data-user-template]")
const searchResult = document.querySelector("[search-results]")

let users = []

//! Inserting items into DOM using products.JSON file
// for tshirts
fetch('./products/data/products.json')
.then((response) => response.json())
.then(data => {
    users = data.hoodie.map(product => {
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const productImage = card.querySelector("[product-image]")
        const header = card.querySelector('[data-name]')
        const imgurl = product.url
        productImage.innerHTML = `<img src="./products/images/${imgurl}.png" alt="${imgurl}">`
        header.textContent = product.name
        searchResult.append(card)
        return{name:product.name, tags:product.tags, element:card}
    });
});