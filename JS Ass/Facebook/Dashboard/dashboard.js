
let ArrOfObj = {
    cards: [
        {
            title: "Nature",
            desc: "Beautiful nature view card.",
            img: "https://picsum.photos/300/200?1"
        },
        {
            title: "Mountain",
            desc: "Amazing mountain scenery.",
            img: "https://picsum.photos/300/200?2"
        },
        {
            title: "Ocean",
            desc: "Blue ocean and waves.",
            img: "https://picsum.photos/300/200?3"
        },
        {
            title: "Forest",
            desc: "Green forest environment.",
            img: "https://picsum.photos/300/200?4"
        },
        {
            title: "City",
            desc: "Modern city lifestyle.",
            img: "https://picsum.photos/300/200?5"
        },
        {
            title: "Travel",
            desc: "Travel around the world.",
            img: "https://picsum.photos/300/200?6"
        },
        {
            title: "Technology",
            desc: "Future tech and AI.",
            img: "https://picsum.photos/300/200?7"
        },
        {
            title: "Coding",
            desc: "Programming and development.",
            img: "https://picsum.photos/300/200?8"
        },
        {
            title: "Gaming",
            desc: "Gaming setup and fun.",
            img: "https://picsum.photos/300/200?9"
        },
        {
            title: "Food",
            desc: "Delicious food items.",
            img: "https://picsum.photos/300/200?10"
        },
        {
            title: "Coffee",
            desc: "Hot coffee and cafe vibes.",
            img: "https://picsum.photos/300/200?11"
        },
        {
            title: "Cars",
            desc: "Luxury sports cars.",
            img: "https://picsum.photos/300/200?12"
        },
        {
            title: "Space",
            desc: "Galaxy and universe view.",
            img: "https://picsum.photos/300/200?13"
        },
        {
            title: "Music",
            desc: "Music and instruments.",
            img: "https://picsum.photos/300/200?14"
        },
        {
            title: "Photography",
            desc: "Creative photography ideas.",
            img: "https://picsum.photos/300/200?15"
        }
    ]
}


let tokenUser = JSON.parse(localStorage.getItem("LoginUser"));

if (!tokenUser) {
    window.location.href = "../loginForm/login.html"
}


let loginUserName = document.getElementById("loginUserName")


loginUserName.innerHTML = `Welcome, ${tokenUser.firstname} ${tokenUser.lastname}!`

function LogOut() {
    localStorage.removeItem("LoginUser")
    window.location.href = "../loginForm/login.html"
}

let parentOfCard = document.getElementById("parentOfCard")

const cards = () => {
    ArrOfObj.cards.map((item, index) => {
        products = `
        <div class="card">
            <img src="${item.img}" alt="Card Image">

            <div class="card-content">
                <h2>${item.title}</h2>
                <p>
                    ${item.desc}
                </p>
                <a href="#" class="btn">Read More</a>
            </div>
        </div>
        `
    })
    parentOfCard.innerHTML += products
}
cards()