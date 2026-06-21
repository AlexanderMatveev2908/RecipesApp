import { UseKitSliceSvc } from '@/core/services/use_kit_slice';
import { Injectable, Signal, computed } from '@angular/core';
import { getRecipesState } from './reducer/selector';
import { RecipesStateT } from './reducer';
import { RecipeT } from '@/common/types/recipes';
import { RecipesActT } from './reducer/actions';

@Injectable({
  providedIn: 'root',
})
export class RecipesSlice extends UseKitSliceSvc {
  public get recipesState(): Signal<RecipesStateT> {
    return this.store.selectSignal(getRecipesState);
  }

  public recipes: Signal<RecipeT[]> = computed(() => this.recipesState().recipes);

  public setRecipes(recipes: RecipeT[]) {
    this.store.dispatch(RecipesActT.SET_RECIPES({ recipes }));
  }
}
