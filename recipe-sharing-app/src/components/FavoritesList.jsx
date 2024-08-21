import  useRecipeStore  from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
    const { favorites, recipes } = useRecipeStore();
  
    const favoriteRecipes = favorites.map(id =>
      recipes.find(recipe => recipe.id === id)
    );
    
  return (
    <div>
      <h2>My Favorites</h2>
      { favoriteRecipes.length > 0 ? (favorites.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <Link to={`/recipes/${recipe.id}`}><h3>{recipe.title}</h3></Link>
          <p>{recipe.description}</p>
        </div>

)) ) : (
  <p>No favorites yet. Add some recipes to your favorites list!</p>

      )}
    </div>
  );
};

export default FavoritesList;