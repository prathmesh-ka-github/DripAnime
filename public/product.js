const queryString = window.location.search;
// console.log(queryString);
const urlparams = new URLSearchParams(queryString)
// console.log(urlparams)
var shoppingcartarr = []

const productid = urlparams.get('id')
console.log(productid);

fetch('./products/data/products.json')
.then((response) => response.json())
.then(data => {
    if (productid.slice(0,2) == '01') {        
        for (let index = 0; index < data.tshirt.length; index++) {
            // console.log(data.tshirt[index].id)
            if(productid === data.tshirt[index].id ) {
                // console.log(data.tshirt[index].name)
                displayproduct(data.tshirt[index])
            }
        }
    }
    if (productid.slice(0,2) == '02') {        
        for (let index = 0; index < data.hoodie.length; index++) {
            // console.log(data.hoodie[index].id)
            if(productid === data.hoodie[index].id ) {
                // console.log(data.hoodie[index].name)
                displayproduct(data.hoodie[index])
            }
        }
    }
    
    // console.log(data.hoodie)
})


var productimg = document.getElementById('productimg')
// productimg.src=""
// console.log(productimg.src);


function displayproduct(product) {
    // console.log(product)
    var productimg = document.getElementById('productimg')
    var productname = document.getElementById('productname')
    var productdesc = document.getElementById('productdesc')
    var productprice = document.getElementById('productprice')
    productimg.src="/products/images/"+product.url+".png"
    productname.innerHTML=product.name
    productprice.innerHTML="RS "+product.price+"/-"
}

function addtocart() {
    console.log("Clicked add to cart!")
    
    if (localStorage.getItem("shoppingcart") == null) {
        localStorage.setItem("shoppingcart","")
    }

    var existingcart = localStorage.getItem("shoppingcart")
    var existingcartarr = existingcart.split(",")
    
    if(existingcartarr.includes(`${productid}`))
    {
        console.error("Item already exists in the cart!!!")
    }
    else {
        existingcartarr.push(`${productid}`)
        console.log(existingcartarr)
        localStorage.setItem("shoppingcart",existingcartarr)
    }    
}