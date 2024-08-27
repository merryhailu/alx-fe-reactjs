import { create } from 'zustand';
import { produce } from 'immer';


 const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
 )})),
 favorites: [],
 addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
 removeFavorite: (recipeId) => set(state => ({
   favorites: state.favorites.filter(id => id !== recipeId)
 })),
 recommendations: [],
 generateRecommendations: () => set(state => {
   const recommended = state.recipes.filter(recipe =>
     state.favorites.includes(recipe.id) && Math.random() > 0.5 );
     return { recommendations: recommended };
    }),

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