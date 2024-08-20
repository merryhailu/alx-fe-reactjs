

import React from 'react';
import  useRecipeStore  from './recipeStore';
import { useNavigate } from 'react-router-dom'; 

const DeleteRecipeButton = ({ recipeId }) => {
  const { deleteRecipe } = useRecipeStore();
  const navigate = useNavigate(); 
}

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      navigate('/recipes'); 

    }
}
export default DeleteRecipeButton;