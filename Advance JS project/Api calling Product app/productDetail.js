let id = JSON.parse(localStorage.getItem("id"))
let productImage = document.getElementById("productImage")
let category = document.getElementById("category")
let title = document.getElementById("title")
let description = document.getElementById("description")
let price = document.getElementById("price")
let discount = document.getElementById("discount")
let rating = document.getElementById("rating")
let brand = document.getElementById("brand")
let stock = document.getElementById("stock")
let sku = document.getElementById("sku")
let weight = document.getElementById("weight")
let shipping = document.getElementById("shipping")
let warranty = document.getElementById("warranty")
let productCard = document.getElementById("productCard")

const productDetailUI = async (id) => {
    // console.log(id);

    try {
        let apiCall = await fetch(`https://dummyjson.com/products/${id}`)
        let response = await apiCall.json()
        console.log(response);
        // response.id = "0"

        console.log(response.id);

                 productImage.src = response.images[0]
            title.innerHTML = response.title
            category.innerHTML = response.category
            description.innerHTML = response.description
            brand.innerHTML = response.brand
            stock.innerHTML = response.stock
            sku.innerHTML = response.sku
            warranty.innerHTML = response.warrantyInformation
            shipping.innerHTML = response.shippingInformation
            weight.innerHTML = response.weight + "kg"
            rating.innerHTML = response.rating
            price.innerHTML = response.price + "$"
            discount.innerHTML = response.discountPercentage + "%"


    } catch (error) {
        console.log(error);

    }

}

productDetailUI(id)