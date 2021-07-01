import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBeginnerComponent } from './create-beginner/create-beginner.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { FindBeginnerComponent } from './find-beginner/find-beginner.component';
import { FindRecipeComponent } from './find-recipe/find-recipe.component';
import { ListBeginnerComponent } from './list-beginner/list-beginner.component'
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { UpdateBeginnerComponent } from './update-beginner/update-beginner.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { CreateChefComponent } from './create-chef/create-chef.component';
import { FindChefComponent } from './find-chef/find-chef.component';
import { ListChefComponent } from './list-chef/list-chef.component';
import { UpdateChefComponent } from './update-chef/update-chef.component';
import { FindByIngredientComponent } from './find-by-ingredient/find-by-ingredient.component';
import { RecipeZanahoriaComponent } from './recipe-zanahoria/recipe-zanahoria.component';

const routes: Routes = [
  {path: '', redirectTo:'beginner', pathMatch:'full'},
  {path: 'listar', component: ListBeginnerComponent},
  {path: 'nuevo', component:CreateBeginnerComponent},
  {path: 'actualizar/:id', component: UpdateBeginnerComponent},
  {path: 'buscar', component: FindBeginnerComponent},

  {path: '',redirectTo:'recipe', pathMatch:'full'},
  {path:'recipe/listar', component: ListRecipeComponent},
  {path:'recipe/nuevo', component: CreateRecipeComponent},
  {path:'recipe/actualizar/:id', component: UpdateRecipeComponent},
  {path:'recipe/buscar', component: FindRecipeComponent},
  {path:'recipe/buscar/ingrediente', component:FindByIngredientComponent},
  {path: 'recipe/buscar/ingrediente/recipe/pastel-zanahoria', component:RecipeZanahoriaComponent},

  {path: '', redirectTo:'chef', pathMatch:'full'},
  {path: 'chef/listar', component: ListChefComponent},
  {path: 'chef/nuevo', component:CreateChefComponent},
  {path: 'chef/actualizar/:id', component: UpdateChefComponent},
  {path: 'chef/buscar', component: FindChefComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
