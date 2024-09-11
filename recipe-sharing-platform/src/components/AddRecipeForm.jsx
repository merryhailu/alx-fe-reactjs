
import { useState } from 'react'

const AddRecipeForm = () => {

    const [formData, setFormData] = useState({
        title: '',
        ingredients: '',
        steps: '',
    });
 
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!formData.title || !formData.ingredients || !formData.steps ){
            console.error('please fill in all required field.');
            return;
        }
        console.log(formData);
    };


  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">

        <h2 className="text-2xl font-bold text-center mb-4">Add a New Recipe</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
                <input type="text" id='title' value={formData.title} 
                onChange={(e) => setFormData({ ...formData, title: e.target.value})} required   className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500  
                focus:border-blue-500" />
            </div>

            <div className="mb-4">
                <label htmlFor="ingredients"  className="block text-gray-700 font-bold mb-2">Ingredients</label>
                <textarea name="ingredients" id="ingredients" value={formData.ingredients}
                onChange={(e) => setFormData({...formData, ingredients: e.target.value})}
               required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div className="mb-4">
                <label htmlFor="instructions" className="block text-gray-700 font-bold mb-2">Instructions</label>
                <textarea name="instructions" id="instructions" value={formData.instructions} 
                onChange={(e) => setFormData({...formData, steps: e.target.value})} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

           <button type='submit' className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
           >Submit</button>
        </form>
    </div>
  )
}

export default AddRecipeForm;