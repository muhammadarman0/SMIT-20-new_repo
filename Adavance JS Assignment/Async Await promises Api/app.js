// console.log("js runing -->");



// const productApi = fetch("https://dummyjson.com/products")

// productApi.then((response) => {
//     return response.json()

// }).then((result)=>{

//     const {products} = result
//     console.log(products);

// }).catch((err)=>{
//     console.log(err);

// })




const side_bar_container = document.getElementById("side_bar_container")

// console.log(side_bar_container);

const HTMLinUI = (recipe) => {
    return `
    <div class="menu_detail">
                    <img src=${recipe.image_url}
                        alt="this is biryani img" width="130px" height="130px">
                    <div class="detail_of_menu">
                        <h3 id="items">${recipe.publisher}</h3>
                        <p id="decs">${recipe.title}</p>
                    </div>
                </div>`
}

side_bar_container.innerHTML = `<h1>Loading....</h1>`
const startApp = async () => {
    const apiRes = await fetch("https://forkify-api.jonas.io/api/v2/recipes?search=pizza")
    // console.log(apiRes);
    const convertToJson = await apiRes.json()
    // console.log(convertToJson);

    const { data: { recipes } } = convertToJson

    const modify = recipes.map((recipe) => {
        
        return HTMLinUI(recipe)
    })
    // console.log(modify);
    setTimeout(()=>{
        side_bar_container.innerHTML = modify.join('')

    },1000)

}

startApp()
