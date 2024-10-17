import React, { useState } from 'react';
import RecipeItem from './RecipeItem';
import CategorySelect from './CategorySelect';

const RecipeList = ({ recipes, deleteRecipe }) => {
    const [categoryFilter, setCategoryFilter] = useState('All'); // Category filter
    const [searchTerm, setSearchTerm] = useState(''); // Search term state

    const filteredRecipes = recipes.filter(recipe => {
        const matchesCategory = categoryFilter === 'All' || recipe.category === categoryFilter;

        // Check if search term matches recipe name, description, or ingredients
        const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              (recipe.ingredients && recipe.ingredients.some(ingredient => 
                                  ingredient.toLowerCase().includes(searchTerm.toLowerCase())
                              ));

        return matchesCategory && matchesSearch;
    });

    return (
        <div className="recipe-list">
            <CategorySelect category={categoryFilter} setCategory={setCategoryFilter} />

            {/* Search bar */}
            <input
                type="text"
                placeholder="Search by name or ingredients"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Recipe list filtered by category and search term */}
            {filteredRecipes.map((recipe) => (
                <RecipeItem
                    key={recipe.id}
                    recipe={recipe}
                    deleteRecipe={deleteRecipe}
                />
            ))}
        </div>
    );
};

export default RecipeList;
