

const RecipeCard = ({ recipe }) => {
  return (
    <div className='bg-slate-500'>
        <h2>{recipe.title} </h2>
        <img src="{recipe.image}" alt="{recipe.title}" />
        <p>{recipe.summary} </p>
        <button> View Recipe</button>
    </div>
  )
}

export default RecipeCard;