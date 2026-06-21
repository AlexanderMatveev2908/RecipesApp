import { AboutPage } from '@/pages/about_page/about-page';
import { HomePage } from '@/pages/home_page/home-page';
import { NotFoundPage } from '@/pages/not_found_page/not-found-page';
import { NoticePage } from '@/pages/notice_page/notice-page';
import { RecipeItemPage } from '@/pages/recipe_item_page/recipe-item-page';
import { RecipesPage } from '@/pages/recipes_page/recipes-page';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'about',
    component: AboutPage,
  },
  {
    path: 'recipes',
    component: RecipesPage,
  },
  {
    path: 'recipes/:recipeId',
    component: RecipeItemPage,
  },
  {
    path: 'notice',
    component: NoticePage,
  },
  {
    path: '**',
    component: NotFoundPage,
  },
];
