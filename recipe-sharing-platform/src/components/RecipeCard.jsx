

const RecipeCard = ({ recipe }) => {
  return (
    <div className='bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-100 transition duration-500 ease-in'>
        <img src="{recipe.image}" alt="{recipe.title}" className="w-full h-48 object-cover rounded-lg" />
        <h2 className="text-lg font-bold mt-4">{recipe.title} </h2> 
        <p className="text-gray-700 mb-4">{recipe.summary} </p>
        <button className="bg-blue-400 text-white rounded-lg px-4 py-2 hover:bg-blue-600"> View Recipe</button>
    </div>
  )
}

export default RecipeCard;