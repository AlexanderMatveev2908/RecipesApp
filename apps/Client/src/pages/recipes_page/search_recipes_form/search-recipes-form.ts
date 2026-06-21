import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxInput } from '@/common/components/forms/checkbox_input/checkbox-input';
import { SearchRecipesUiFct } from './ui_fct';
import { SearchRecipesFormMng, SearchRecipesFormT } from './paperwork';
import { UseFormAppDir } from '@/core/directives/use_form_app';
import { TxtInput } from '@/common/components/forms/txt_input/txt-input';
import { RecipesUiFct } from '../ui_fct';
import { RecipesSlice } from '@/features/recipes/slice';

@Component({
  selector: 'app-search-recipes-form',
  imports: [ReactiveFormsModule, CheckboxInput, TxtInput],
  templateUrl: './search-recipes-form.html',
  styleUrl: './search-recipes-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchRecipesForm extends UseFormAppDir implements OnInit {
  public readonly SearchRecipesUiFct = SearchRecipesUiFct;

  public readonly schema = SearchRecipesFormMng.schema;
  public readonly form = SearchRecipesFormMng.form();

  private readonly recipesSlice: RecipesSlice = inject(RecipesSlice);

  ngOnInit(): void {
    this.setupForm();

    this.useEffect(() => {
      const formData: SearchRecipesFormT = this.data() as SearchRecipesFormT;

      const filtered = RecipesUiFct.data.filter((recipe) => {
        const isInPrep = !formData.maxPrepTime.length || formData.maxPrepTime.includes(recipe.prep);

        const isInCook = !formData.maxCookTime.length || formData.maxCookTime.includes(recipe.cook);

        const search = formData.nameDish.toLowerCase().trim();

        const isInNameOrIngredient =
          !search.length ||
          recipe.name.toLowerCase().includes(search) ||
          recipe.ingredients.some((item) => item.ingredient.toLowerCase().includes(search));

        return isInPrep && isInCook && isInNameOrIngredient;
      });

      this.recipesSlice.setRecipes(filtered);
    });
  }
}
