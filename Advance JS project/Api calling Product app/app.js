// console.log("api is runing");

let serachInput = document.getElementById("serachInput")

let searhIcon = document.getElementById("searhIcon")

const productCard = document.querySelector(".productCard")

const reloader = document.querySelector(".loader")
const reloadApp = () => {
    setTimeout(() => {
        reloader.style.display = "none"
    }, 1000)
    productCard.style.display = "flex"
}



function startApp() {
    let apiCall = fetch(`https://dummyjson.com/products?limit=10`)

    // console.log(apiCall);


    apiCall.then((response) => {
        return response.json()
    }).then((result) => {
        // console.log(result);

        let { products } = result


        let returnHTML = products.map((items) => {
            let id = items.id;
            console.log(id);

            

            return ` 
            <div class="apiCallingPr dummyclass" id=${id}>
            <a  class="productCard" href="productDetails.html" target="_blank">
                <div id="${id}" class="imgPro">
                    <img id="${id}" class="dummyclass"
                        src=${items.images[0]}
                        alt="">
                    <h2 class="dummyclass" id=${id}>${items.title.slice(0, 20)}</h2>
                </div>
                <div id="${id}" class="product_detail dummyclass">
                    <h3 class="dummyclass">${items.brand} </h3>
                    <button class="dummyclass" id="${id}">${items.category}</button>
                </div>
                <div id="${id}" class="desc dummyclass">
                    <p class="dummyclass" id="${id}">${items.description.slice(0, 20)}...</p>
                </div>
                <div class="price dummyclass">
                    <button id="${id}" class=""dummyclass">${items.price}</button>
                </div>
                </a>
                </div>
            `
        })
        reloadApp()
        setTimeout(() => {
            productCard.innerHTML = returnHTML.join(" ")
        }, 1000)
    })
}

startApp()

const serahEachProduct = async () => {

    let value = serachInput.value
    let apiData = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(value)}`)
    let searchProduct = await apiData.json();

    const { products } = searchProduct
    console.log(products);

    if (value.trim() === "") {
        startApp()
        return
    }

    const eachItems = products.map((search) => {
        let id = search.id;
        return `  <div class="apiCallingPr dummyclass" id=${id}>
            <a  id="productCard" href="productDetails.html" target="_blank">
                <div id="${id}" class="imgPro">
                    <img id="${id}" class="dummyclass"
                        src=${search.images[0]}
                        alt="">
                    <h2 class="dummyclass" id=${id}>${search.title.slice(0, 20)}</h2>
                </div>
                <div id="${id}" class="product_detail dummyclass">
                    <h3 class="dummyclass">${search.brand} </h3>
                    <button class="dummyclass" id="${id}">${search.category}</button>
                </div>
                <div id="${id}" class="desc dummyclass">
                    <p class="dummyclass" id="${id}">${search.description.slice(0, 20)}...</p>
                </div>
                <div class="price dummyclass">
                    <button id="${id}" class=""dummyclass>${search.price}</button>
                </div>
                </a>
                </div>
    `
        console.log(eachItems);

    })
    productCard.innerHTML = eachItems.join("")

}


document.addEventListener("click", (e) => {
    let elem = e.target
    if (elem.classList.contains("dummyclass")) {
        localStorage.setItem("id", JSON.stringify(elem.id))

    }
})



searhIcon.addEventListener("click", serahEachProduct)

