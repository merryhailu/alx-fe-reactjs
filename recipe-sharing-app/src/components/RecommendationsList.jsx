import React from 'react';
import  useRecipeStore  from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const { recommendations, recipes } = useRecipeStore();

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length > 0 ? (
        recommendations.map(recipe => (
          <div key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}><h3>{recipe.title}</h3></Link>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations yet. Check out some recipes and add favorites to personalize recommendations!</p>
      )}
    </div>
  );
};

export default RecommendationsList;