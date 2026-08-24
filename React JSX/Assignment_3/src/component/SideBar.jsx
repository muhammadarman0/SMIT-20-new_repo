// import js from "@eslint/js";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import "./Sidebar.css";

const Sidebar = React.memo(({ setSelectRecipe, search = "" }) => {

    let [recipes, setRecipe] = useState([])

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getRecipe = async () => {
            try {
                let data = await axios.get(`http://dummyjson.com/recipes`)
                // let data = await apiRecipe.json();

                setRecipe(data.data.recipes)

            } catch (error) {
                console.log(error);

            } finally {
                setLoading(false)
            }
        }
        getRecipe()
    }, [])
    const filteredRecipes = recipes.filter((recipe) =>
        recipe.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );


    return (
        <>
            {/* {console.log(setRecipe(recipes))} */}
            <aside className="sidebar">

                {/* Restaurant Header */}

                <div className="restaurantHeader">

                    <div className="restaurantLogo">
                        🍽️
                    </div>

                    <div>
                        <h2>Foodie</h2>
                        <span>Restaurant</span>
                    </div>

                </div>


                {/* Menu Heading */}

                <div className="menuHeading">
                    <span>OUR MENU</span>
                    <div></div>
                </div>


                {/* Recipe List */}

                <div className="recipeList">
                    {/* Loader */}

                    {loading &&(
                        <div className="loaderContainer">
                            <div className="loader"></div>
                            <p>Loading menu...</p>
                        </div>
                    )}

                    {filteredRecipes.map((recipe) => {
                        let id = recipe.id;


                        return (
                            <div
                                className="recipeItem"
                                key={id}
                                onClick={() => console.log(setSelectRecipe(recipe))
                                }
                            >

                                <img
                                    src={recipe.image}
                                    alt={recipe.name}
                                />

                                <div className="recipeInfo">

                                    <h3>{recipe.name}</h3>

                                    <p>
                                        {recipe.cuisine}
                                    </p>

                                </div>

                                <span className="arrow">
                                    →
                                </span>

                            </div>)

                    })
                    }

                </div>

            </aside >
        </>
    );
})

export default Sidebar;