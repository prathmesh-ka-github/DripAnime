const userCardTemplate = document.querySelector("[data-user-template]")
const searchResult = document.querySelector("[search-results]")

let users = []

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