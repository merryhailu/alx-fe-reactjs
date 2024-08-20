
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <p>Hello there</p>
        <h1>Recipe Sharing App</h1>
            <AddRecipeForm />
            <RecipeList />
    <Router>
          <Routes>
             <Route path='/recipe/:id' element={<RecipeDetails />} />
           </Routes>
       </Router>
    </>
  )
}

export default App;
