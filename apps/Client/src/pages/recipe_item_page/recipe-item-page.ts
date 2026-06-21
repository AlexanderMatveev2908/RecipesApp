import { SvgAdvFood } from '@/common/components/svgs/advanced/food/food';
import { SvgAdvTimer } from '@/common/components/svgs/advanced/timer/timer';
import { SvgAdvUser } from '@/common/components/svgs/advanced/user/user';
import { Nullable, Optional } from '@/common/types/general';
import { RecipeT } from '@/common/types/recipes';
import { UseNavSvc } from '@/core/services/use_nav';
import { RecipesSlice } from '@/features/recipes/slice';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  Signal,
} from '@angular/core';
import { ImgLoading } from '@/common/components/general/img_loading/img-loading';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-recipe-item-page',
  imports: [ImgLoading, NgComponentOutlet],
  templateUrl: './recipe-item-page.html',
  styleUrl: './recipe-item-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeItemPage {
  private readonly useNav: UseNavSvc = inject(UseNavSvc);
  private readonly recipesSlice: RecipesSlice = inject(RecipesSlice);

  public readonly recipe: Signal<Optional<RecipeT>> = computed(() => {
    const currId: string = this.useNav.pathVariables()?.['recipeId'];
    const currRecipe: Optional<RecipeT> = this.recipesSlice
      .recipes()
      .find((el) => el.id === currId);

    return currRecipe;
  });

  public readonly SvgFood = SvgAdvFood;
  public readonly SvgTimer = SvgAdvTimer;
  public readonly SvgUser = SvgAdvUser;
}
