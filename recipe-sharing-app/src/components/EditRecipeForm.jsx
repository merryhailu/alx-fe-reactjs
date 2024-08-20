import React, { useState } from 'react';
import  useRecipeStore  from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [formData, setFormData] = useState(recipe); 
  const { updateRecipe } = useRecipeStore();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();  

    updateRecipe(formData);
  
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;