import React from 'react';

const CategorySelect = ({ category, setCategory }) => {
    return (
        <div>
            <label>Category: </label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Dessert">Dessert</option>
                <option value="Snack">Snack</option>
            </select>
        </div>
    );
};

export default CategorySelect;
