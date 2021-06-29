import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../model/recipe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css']
})
export class UpdateRecipeComponent implements OnInit {
  id: number = 0;
  recipe: Recipe = new Recipe();
  constructor(private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.recipeService.getRecipeById(this.id)
    .subscribe(datos=>{
      console.log(datos)
      this.recipe = datos;
    }, error=>console.log(error));
  }
  updateRecipe(){
    this.recipeService.updateRecipe(this.id, this.recipe)
    .subscribe(datos =>{
      console.log(datos)
      this.router.navigate(['listar']);
    }, error=>console.log(error));
    this.recipe = new Recipe();
  }
}
