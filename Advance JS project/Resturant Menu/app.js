const resturantMenu = [
    {
        catergory: "biryani",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvZoV37UB7WdnE0X88UJ0DrvZ-5FjBIlXvWpHPdBuxA&s=10",
        name: "Beef Biryani",
        desc: "Spicy beef biryani",
        Price: 350

    }, {
        catergory: "biryani",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX4lr3u9v2CzcOPME5VYnZmbFWo1cpl1hhjKBX2bypzQ&s=10",
        name: "Plane Biryani",
        desc: "Sada biryani best and tasty",
        Price: 120
    }, {
        catergory: "biryani",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTpR8R8eXUaNtrehKHSMuMnkwCfRwZHHmTjVHZYyW8yg&s=10",
        name: "Chicken Biryan",
        desc: "Bhut achi aur zabardast",
        Price: 250

    },
    {
        catergory: "Fast Food",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1UjQDH6bG90lqMb-VzyT5mE0pm5eMZ6PRhedRt5X8g&s=10",
        name: "Deal 1",
        desc: "Achi deal ha ap bhi try kare",
        Price: "Deal 1200"
    },
    {
        catergory: "Fast Food",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLyiewCkoITk_FToLJPGMnMSQqxLJ3fGcPj_wbOXEaw&s",
        name: "Zinger Burger",
        desc: "Juciy burger",
        Price: 450
    },
    {
        catergory: "karahi",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-LUFIn9GFtofnc8DgPzxzKzGhheoODN3sCQ7-Hdkiw&s=10",
        name: "Mutton Karahi",
        desc: "Mutton karahi bhut achi ymmy",
        Price: 1200
    },
    {
        catergory: "breakFast",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdl3yt0zs7S5jlXlNfZQ4Kyj2rMtDWXug2-JOF1PBSTw&s=10",
        name: "Halwa Puri aur chana",
        desc: "Breakfast khe liye acha ha",
        Price: 180
    },
    {
        catergory: "breakFast",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrpcdBYElXGmjc2PsDaNRu6hHIHcTLyz39N-JHF0OUBg&s=10",
        name: "Chai Parata",
        desc: "Breakfast khe liye acha ha",
        Price: 120
    },
    {
        catergory: "Drinks",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbVY2zACiMvGBmX9X9VxeLPhTQ9Xq5DnHwM1ie7MEQg&s=10",
        name: "Limca (5) Flavor",
        desc: "Sab ache ha",
        Price: 120
    },
    {
        catergory: "Drinks",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZBGMMqQf80R_mg-zxp8WT5qzU4plPfDeKGQydOSXmQ&s=10",
        name: "Lassi (Half)",
        desc: "Chote bacho khe liye",
        Price: 150
    },
    {
        catergory: "Drinks",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThm2TDsSUhzU43VtFn25dVJw3kqp0JLonzFjvwgznZNw&s=10",
        name: "Lassi (Full)",
        desc: "Bare bacho khe liye",
        Price: "Rs 150"
    },

]

let all = document.getElementById("all");
let karahi = document.getElementById("karahi")
let fastFood = document.getElementById("fastfood");
let biryani = document.getElementById("biryani");
let breakFast = document.getElementById("breakfast")
let drinks = document.getElementById("drinks")
// let dessert = document.getElementById("dessert")
let searchBar = document.getElementById("serachItem")
let searchBtn = document.getElementById("searchBtn")
let container = document.getElementById("parentOfCm")
let goToWhatsapp = document.getElementById("goToWhatsapp")
let goToWhatsapp2 = document.getElementById("goToWhatsapp2")
const allitem = () => {
    let allIt = resturantMenu.filter((i) => {
        return i
    })
    let showHTML = allIt.map((i) => {
        return `<div class="itemsCategory">
                    <img src="${i.img}"
                        alt="">
                    <div class="itemdetail">
                        <h4>${i.name}</h4>
                        <p class="desc">${i.desc}</p>
                        <button class="btn">${i.Price}</button>
                    </div>
                </div>`
    })

    // console.log(allIt);

    container.innerHTML = showHTML.join(" ")
}

allitem()
const filterbiryani = (catergory) => {
    let filterItmes = resturantMenu.filter((i) => {
        if (i.catergory.toLowerCase() === catergory.toLowerCase()) {
            return i
        }
    })
    let showHTML = filterItmes.map((i) => {
        return `<div class="itemsCategory">
                    <img src="${i.img}"
                        alt="">
                    <div class="itemdetail">
                        <h4>${i.name}</h4>
                        <p class="desc">${i.desc}</p>
                        <button class="btn">${i.Price}</button>
                    </div>
                </div>`
    })
    container.innerHTML = showHTML.join(" ")
}

const filterKarahi = (catergory) => {
    let filterItmes = resturantMenu.filter((i) => {
        if (i.catergory.toLowerCase() === catergory.toLowerCase()) {
            return i
        }
    })
    let showHTML = filterItmes.map((i) => {
        return `<div class="itemsCategory">
                    <img src="${i.img}"
                        alt="">
                    <div class="itemdetail">
                        <h4>${i.name}</h4>
                        <p class="desc">${i.desc}</p>
                        <button class="btn">${i.Price}</button>
                    </div>
                </div>`
    })
    container.innerHTML = showHTML.join(" ")
}

const filterFastFood = (catergory) => {
    let filterItems = resturantMenu.filter((i) => {
        if (i.catergory.toLowerCase() === catergory.toLowerCase()) {
            return i
        }
    })
    let showHTML = filterItems.map((i) => {
        return `<div class="itemsCategory">
                    <img src="${i.img}"
                        alt="">
                    <div class="itemdetail">
                        <h4>${i.name}</h4>
                        <p class="desc">${i.desc}</p>
                        <button class="btn">${i.Price}</button>
                    </div>
                </div>`
    })
    container.innerHTML = showHTML.join(" ")
}

const filterDrinks = (catergory) => {
    let filterItme = resturantMenu.filter((i) => {
        if (i.catergory.toLowerCase() === catergory.toLowerCase()) {
            return i
        }
    })
    let showHTML = filterItme.map((i) => {
        return `<div class="itemsCategory">
                    <img src="${i.img}"
                        alt="">
                    <div class="itemdetail">
                        <h4>${i.name}</h4>
                        <p class="desc">${i.desc}</p>
                        <button class="btn">${i.Price}</button>
                    </div>
                </div>`
    })
    container.innerHTML = showHTML.join(" ")
}

const filterBreak = (catergory) => {
    let filterItem = resturantMenu.filter((i) => {
        if (i.catergory.toLowerCase() === catergory.toLowerCase()) {
            return i
        }
    })
    let showHTML = filterItem.map((i) => {
        return `<div class="itemsCategory">
                    <img src="${i.img}"
                        alt="">
                    <div class="itemdetail">
                        <h4>${i.name}</h4>
                        <p class="desc">${i.desc}</p>
                        <button class="btn">${i.Price}</button>
                    </div>
                </div>`
    })
    container.innerHTML = showHTML.join(" ")
}

const cardHTML = (i) => {
    return `<div class="itemsCategory">
                    <img src="${i.img}"
                        alt="">
                    <div class="itemdetail">
                        <h4>${i.name}</h4>
                        <p class="desc">${i.desc}</p>
                        <button class="btn">${i.Price}</button>
                    </div>
                </div>`
}

const searchItme = () => {
    let searchValue = searchBar.value
    if (searchValue.trim() === "") { alert`Please search a items` }
    let filterSearchItem = resturantMenu.filter((i) => {
        if (i.name.toLowerCase().includes(searchValue.toLowerCase()) || i.name.toLowerCase() === searchValue.toLowerCase()) {
            return i
        }
    })
    let showHTML = filterSearchItem.map((i) => {
        return cardHTML(i)
    })
    // console.log(filterSearchItem);
    container.innerHTML = showHTML.join("  ")
    console.log("ma chala");
    searchValue = ""

}
const orderitem = () => {
    setInterval(() => {
        window.location.href = "https://api.whatsapp.com/send/?phone=923001234567&text=Assalam-o-Alaikum%2C+mujhe+order+karna+hai&type=phone_number&app_absent=0"
    })
}
const order2 = () => {
    // if()
    setInterval(() => {
        window.location.href = "https://api.whatsapp.com/send/?phone=923001234567&text=Assalam-o-Alaikum%2C+mujhe+order+karna+hai&type=phone_number&app_absent=0"
    })
}

all.addEventListener("click", allitem)
biryani.addEventListener("click", () => { filterbiryani("biryani") })
karahi.addEventListener("click", () => {
    filterKarahi("karahi")
})
fastFood.addEventListener("click", () => filterFastFood("fast food"))
drinks.addEventListener("click", () => {
    filterDrinks("Drinks")
})
breakFast.addEventListener("click", () => filterBreak("breakfast"))
searchBtn.addEventListener("click", searchItme)
goToWhatsapp.addEventListener("click", orderitem)
goToWhatsapp2.addEventListener("click", order2)