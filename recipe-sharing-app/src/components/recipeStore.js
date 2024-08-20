import { create } from 'zustand'


const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(produce(draft => {
    draft.recipes.push(newRecipe);
  })),
  deleteRecipe: (recipeId) => set(produce(draft => {
    const recipeIndex = draft.recipes.findIndex(recipe => recipe.id === recipeId);
    if (recipeIndex !== -1) {
      draft.recipes.splice(recipeIndex, 1);
    }
  })),
  updateRecipe: (updatedRecipe) => set(produce(draft => {
    const recipeIndex = draft.recipes.findIndex(recipe => recipe.id === updatedRecipe.id);
    if (recipeIndex !== -1) {
      draft.recipes[recipeIndex] = updatedRecipe;
    }
  })),
}));

export default useRecipeStore;