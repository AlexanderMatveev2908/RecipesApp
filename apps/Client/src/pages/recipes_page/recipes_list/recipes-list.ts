import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ImgLoading } from '@/common/components/general/img_loading/img-loading';
import { SvgAdvFood } from '@/common/components/svgs/advanced/food/food';
import { SvgAdvTimer } from '@/common/components/svgs/advanced/timer/timer';
import { SvgAdvUser } from '@/common/components/svgs/advanced/user/user';
import { NgComponentOutlet } from '@angular/common';
import { RecipesSlice } from '@/features/recipes/slice';

@Component({
  selector: 'app-recipes-list',
  imports: [ImgLoading, NgComponentOutlet],
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesList {
  public readonly recipesSlice: RecipesSlice = inject(RecipesSlice);

  public readonly SvgFood = SvgAdvFood;
  public readonly SvgTimer = SvgAdvTimer;
  public readonly SvgUser = SvgAdvUser;
}
