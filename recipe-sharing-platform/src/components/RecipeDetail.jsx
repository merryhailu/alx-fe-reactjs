import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



const RecipeDetail = () => {

   const { recipeId } = useParams();
   const [ recipe, setRecipe ] = useState(null);

   useEffect (() => {
      
    const fetchRecipe = async () => {

        try {
            const response = await fetch(`data.json?id = ${recipeId}`);
            const data = await response.json();
            setRecipe(data[0]);
        }
        catch (error){
            console.error('Error Fetching Recipe:', error);
        }
    };

    fetchRecipe();

   }, [recipeId]);

   if(!recipe){
    return <p>Loading ...</p>;
   }

  return (
    <div className='mx-auto py-8'>
        <h1 className='text-3xl font-bold text-center'>{ recipe.title }</h1>
        <img src="{recipe.image}" alt="{recipe.title}" className='w-full h-64 object-cover rounded-lg mb-4' />
         <p>{recipe.summary}</p>

         <div className='bg-white rounded-lg shadow-md p-4'>

         <h2 className='text-xl font-bold mt-4'>Ingredients</h2>
         <ul className='list-disc pl-4 text-gray-700'> 
            {recipe.ingredients.map((ingredient, index)  => (
            <li key={index}> {ingredient}</li>
         ))}</ul>  

         <h2 className='text-xl font-bold mt-4'>Instructions</h2>
         <ol className='list-decimal pl-4 text-gray-700'> 
            {recipe.instructions.map((instruction, index)  => (
            <li key={index}> {instruction}</li>
        ))}</ol> 

       </div>
    </div>
  );
};

export default RecipeDetail;