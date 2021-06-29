import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  recipe: Recipe = new Recipe();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  insertRecipe(){
    this.recipeService.createRecipe(this.recipe)
      .subscribe(datos=>console.log(datos), error=>console.log(error));
      this.recipe = new Recipe();
      this.router.navigate(['recipe/listar']);
  }

}
