import  useRecipeStore  from "./recipeStore";
import RecipeCard from './RecipeCard';

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
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <p>No recipes found.</p> )}
      </div>
    );
  };

  export default RecipeList;