import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-recipes-page',
  imports: [],
  templateUrl: './recipes-page.html',
  styleUrl: './recipes-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesPage {}
