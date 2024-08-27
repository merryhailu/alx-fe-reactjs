import  useRecipeStore  from "./recipeStore";
import RecipeCard from './RecipeCard';
import { Link } from 'react-router-dom';

  const RecipeList = () => {
    const {recipes, filteredRecipes }= useRecipeStore();
 

    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}

       {filteredRecipes.length > 0 ? (
        filteredRecipes.map(recipe => (
          <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
          <RecipeCard  recipe={recipe} />
          </Link>
        ))
      ) : (
        <p>No recipes found.</p> )}
      </div>
    );
  };

  export default RecipeList;