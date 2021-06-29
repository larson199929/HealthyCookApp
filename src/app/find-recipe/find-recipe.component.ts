import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-find-recipe',
  templateUrl: './find-recipe.component.html',
  styleUrls: ['./find-recipe.component.css']
})
export class FindRecipeComponent implements OnInit {

  id: number = 0;
  recipe: Recipe = new Recipe();
  description: string = '';
  publication_date: Date = new Date();
  assessment: string = '';
  recipes: Recipe[]=[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {}
    searchRecipeById(){
      this.recipeService.getRecipeById(this.id)
      .subscribe(recipe=>{
        console.log(recipe)
        this.recipe = recipe
      });
    }

    searchRecipeByDate(){
      this.recipeService.getRecipeByDate(this.publication_date)
      .subscribe(recipes=>{
        console.log(recipes)
        this.recipes = recipes
      });
    }
 

}
