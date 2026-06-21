import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxInput } from '@/common/components/forms/checkbox_input/checkbox-input';
import { SearchRecipesUiFct } from './ui_fct';
import { SearchRecipesFormMng } from './paperwork';
import { UseFormAppDir } from '@/core/directives/use_form_app';

@Component({
  selector: 'app-search-recipes-form',
  imports: [ReactiveFormsModule, CheckboxInput],
  templateUrl: './search-recipes-form.html',
  styleUrl: './search-recipes-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchRecipesForm extends UseFormAppDir implements OnInit {
  public readonly SearchRecipesUiFct = SearchRecipesUiFct;

  public readonly schema = SearchRecipesFormMng.schema;
  public readonly form = SearchRecipesFormMng.form();

  ngOnInit(): void {
    this.setupForm();
  }
}
