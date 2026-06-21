import { createFeatureSelector } from '@ngrx/store';
import { RecipesStateT } from '.';

export const getRecipesState = createFeatureSelector<RecipesStateT>('recipes');
