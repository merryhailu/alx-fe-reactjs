
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EditRecipeForm from './components/EditRecipeForm'
import DeleteRecipeButton from './components/DeleteRecipeButton'

function App() {
  return (
    <>
    <p>Hello there</p>
        <h1>Recipe Sharing App</h1>
            <AddRecipeForm />
            <RecipeList />
    <Router>
          <Routes>
             <Route path='/recipes/:id' element={<RecipeList />} />
             <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
           </Routes>
       </Router>

<EditRecipeForm />
<DeleteRecipeButton />
<RecipeDetails />

    </>
  )
}

export default App;
