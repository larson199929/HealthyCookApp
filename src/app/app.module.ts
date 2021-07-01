import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBeginnerComponent } from './create-beginner/create-beginner.component';
import { ListBeginnerComponent } from './list-beginner/list-beginner.component';
import { FindBeginnerComponent } from './find-beginner/find-beginner.component';
import { UpdateBeginnerComponent } from './update-beginner/update-beginner.component';
import { DeleteBeginnerComponent } from './delete-beginner/delete-beginner.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { DeleteRecipeComponent } from './delete-recipe/delete-recipe.component';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { FindRecipeComponent } from './find-recipe/find-recipe.component';
import { CreateChefComponent } from './create-chef/create-chef.component';
import { ListChefComponent } from './list-chef/list-chef.component';
import { FindChefComponent } from './find-chef/find-chef.component';
import { UpdateChefComponent } from './update-chef/update-chef.component';
import { FindByIngredientComponent } from './find-by-ingredient/find-by-ingredient.component';
import { RecipeZanahoriaComponent } from './recipe-zanahoria/recipe-zanahoria.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBeginnerComponent,
    ListBeginnerComponent,
    FindBeginnerComponent,
    UpdateBeginnerComponent,
    DeleteBeginnerComponent,
    CreateRecipeComponent,
    UpdateRecipeComponent,
    DeleteRecipeComponent,
    ListRecipeComponent,
    FindRecipeComponent,
    CreateChefComponent,
    ListChefComponent,
    FindChefComponent,
    UpdateChefComponent,
    FindByIngredientComponent,
    RecipeZanahoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
