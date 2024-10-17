import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';
import './App.css';

function App(){
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (name, description, category, ingredients) => {
    const newRecipe = {
      id: Date.now(),
      name,
      description,
      category,
      ingredients: ingredients || [], // Ensure ingredients is an array
    };
    setRecipes([...recipes, newRecipe]);
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  return(
    <div className="App">
      <Header />
      <AddRecipe addRecipe={addRecipe} />
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <Footer />
    </div>
  );
}

export default App;
