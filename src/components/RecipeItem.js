import React from 'react';

const RecipeItem = ({ recipe, deleteRecipe }) => {
    return (
        <div className="recipe">
            <h2>{recipe.name}</h2> {/* Accessing recipe.name */}
            <p>{recipe.description}</p> {/* Accessing recipe.description */}
            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
        </div>
    );
};

export default RecipeItem;