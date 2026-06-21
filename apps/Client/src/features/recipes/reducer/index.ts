import { RecipeT } from '@/common/types/recipes';
import { createReducer, on } from '@ngrx/store';
import { RecipesActT } from './actions';

export interface RecipesStateT {
  recipes: RecipeT[];
}

const initState: RecipesStateT = {
  recipes: [],
};

export const recipesReducer = createReducer(
  initState,
  on(RecipesActT.SET_RECIPES, (_: RecipesStateT, action: { recipes: RecipeT[] }) => ({
    ..._,
    recipes: action.recipes,
  })),
);
