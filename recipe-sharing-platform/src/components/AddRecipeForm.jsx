import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log({ title, ingredients, steps });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!title) errors.title = 'Title is required';
    if (!ingredients) errors.ingredients = 'Ingredients are required';
    if (!steps) errors.steps = 'Preparation steps are required';
    return errors;
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold">Recipe Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold">Preparation Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default AddRecipeForm;
