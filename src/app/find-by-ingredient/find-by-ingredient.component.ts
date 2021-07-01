import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-by-ingredient',
  templateUrl: './find-by-ingredient.component.html',
  styleUrls: ['./find-by-ingredient.component.css']
})
export class FindByIngredientComponent implements OnInit {
  name = "Angular";
  options: string[] = ["Selecciona un ingrediente","Zanahoria", "Pollo", "Patatas", "Fideos"];
  selectedQuantity = "Selecciona un ingrediente";
  ngOnInit(): void {
  }

}
