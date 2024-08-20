import { create } from 'zustand'


const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((newRecipe) =>
      newRecipe === updatedRecipe.id ? updatedRecipe : newRecipe
    ),
  })),
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter((newRecipe) => newRecipe.id !== recipeId),
  })),
}));

export default useRecipeStore;