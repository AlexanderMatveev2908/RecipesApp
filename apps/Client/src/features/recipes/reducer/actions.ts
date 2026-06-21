import { RecipeT } from '@/common/types/recipes';
import { createAction, props } from '@ngrx/store';

export const RecipesActT = {
  SET_RECIPES: createAction('SET_RECIPES', props<{ recipes: RecipeT[] }>()),
};
