import React, { useState } from 'react';
import CategorySelect from './CategorySelect';

const AddRecipe = ({ addRecipe }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Breakfast');
    const [ingredients, setIngredients] = useState(''); // New ingredients field

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && description.trim()) {
            const ingredientList = ingredients.split(',').map(ing => ing.trim()); // Split ingredients by comma
            addRecipe(name, description, category, ingredientList); // Pass ingredients to addRecipe
            setName('');
            setDescription('');
            setCategory('Breakfast');
            setIngredients(''); // Reset ingredients
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Recipe Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea
                placeholder="Recipe Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <CategorySelect category={category} setCategory={setCategory} />
            
            {/* Ingredients input */}
            <input
                type="text"
                placeholder="Ingredients (comma separated)"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
            />

            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipe;
