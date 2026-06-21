import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchRecipesForm } from './search_recipes_form/search-recipes-form';
import { RecipesList } from './recipes_list/recipes-list';

@Component({
  selector: 'app-recipes-page',
  imports: [SearchRecipesForm, RecipesList],
  templateUrl: './recipes-page.html',
  styleUrl: './recipes-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesPage {}
