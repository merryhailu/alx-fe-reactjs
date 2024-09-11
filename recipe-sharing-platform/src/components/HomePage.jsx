
import { useState, useEffect } from 'react'
import  RecipeCard  from './RecipeCard';


function HomePage() {


    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('data.json');
        const data = await response.json();
        setRecipes(data);
      };
  
      fetchData();
    }, []);



  return (
    <div className='mx-auto py-8 bg-cyan-300'>
        <h1 className='text-3xl text-center font-bold'>Welcome to My Recipe App</h1>
        <div className='bg-red-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4' >
            {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
        ))} 
        </div>


    </div>
  )
}

export default HomePage;