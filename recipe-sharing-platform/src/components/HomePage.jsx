
import { useState, useEffect } from 'react'
import  RecipeCard  from './RecipeCard';
import { Link } from 'react-router-dom';


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
    <div className='mx-auto py-8 shadow-md bg-slate-200'>
        <h1 className='text-3xl text-center font-bold'>Welcome to My Recipe App</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 hover:scale-110 rounded-lg shadow-lg' >
            {recipes.map((recipe) => (
              <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
            <RecipeCard  recipe={recipe} />
            </Link>
        ))} 
        </div>
    </div>
  )
}

export default HomePage;