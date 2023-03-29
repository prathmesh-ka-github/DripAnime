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
        console.log(user.tags)
    })
})

fetch('./tshirt.json')
    .then((response) => response.json())
    .then(data => {
        users = data.tshirt.map(product => {
            const card = userCardTemplate.content.cloneNode(true).children[0]
            console.log(product)
            const header = card.querySelector('[data-name]')
            const tags = card.querySelector('[data-tags]')
            header.textContent = product.name
            tags.textContent = product.tags
            searchResult.append(card)
            return{name:product.name, tags:product.tags, element:card}
        });
    });