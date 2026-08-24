import React from "react";

const RecipeDetails = ({ recipe }) => {

    if (!recipe) {
        return (
            <main className="recipeDetails empty">

                <div>
                    <span>🍽️</span>

                    <h1>Select a Dish</h1>

                    <p>
                        Choose any dish from the menu
                        to see its details.
                    </p>
                </div>

            </main>
        );
    }

    return (
        <main className="recipeDetails">

            <div className="recipeImageBox">
                <img
                    src={recipe.image}
                    alt={recipe.name}
                />
            </div>

            <div className="recipeContent">

                <span className="cuisine">
                    {recipe.cuisine}
                </span>

                <h1>{recipe.name}</h1>

                <p className="description">
                    {recipe.instructions?.join(" ")}
                </p>

                <div className="recipeMeta">

                    <div>
                        <span>⭐</span>
                        <strong>{recipe.rating}</strong>
                        <small>Rating</small>
                    </div>

                    <div>
                        <span>⏱️</span>
                        <strong>{recipe.prepTimeMinutes} min</strong>
                        <small>Prep Time</small>
                    </div>

                    <div>
                        <span>🔥</span>
                        <strong>{recipe.caloriesPerServing}</strong>
                        <small>Calories</small>
                    </div>

                </div>

                <button className="orderBtn">
                    Order Now
                </button>

            </div>

        </main>
    );
};

export default RecipeDetails;