import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RecipesUiFct } from '../ui_fct';
import { ImgLoading } from '@/common/components/general/img_loading/img-loading';
import { SvgAdvFood } from '@/common/components/svgs/advanced/food/food';
import { SvgAdvTimer } from '@/common/components/svgs/advanced/timer/timer';
import { SvgAdvUser } from '@/common/components/svgs/advanced/user/user';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-recipes-list',
  imports: [ImgLoading, NgComponentOutlet],
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesList {
  public readonly RecipesUiFct = RecipesUiFct;

  public readonly SvgFood = SvgAdvFood;
  public readonly SvgTimer = SvgAdvTimer;
  public readonly SvgUser = SvgAdvUser;
}
