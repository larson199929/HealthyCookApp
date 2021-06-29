import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../model/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent implements OnInit {

  date: Date = new Date();
  recipes: Recipe[]=[];
  constructor(private router: Router, private recipeService: RecipeService) { }


  ngOnInit(): void {
    this.loadDataRecipes();
  }
  loadDataRecipes(){
    this.recipeService.getRecipeList()
      .subscribe(recipes=>this.recipes=recipes);
  }
  deleteRecipe(recipe: Recipe){
    this.recipeService.deleteRecipe(recipe.id)
    .subscribe(data=>{this.loadDataRecipes();})
  }

  updateRecipe(recipe: Recipe){
    this.router.navigate(['Update', recipe.id]);
  }

  searchRecipeByDate(){
    if(!this.date){
        this.recipeService.getRecipeByDate(this.date)
        .subscribe(recipes=>this.recipes=recipes);
    }else{
      this.loadDataRecipes();
    }
  }
}
