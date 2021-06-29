import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
    private baseURL= 'https://apphealthycook.herokuapp.com/api/recipes';
  //private baseURL = 'http://localhost:5000/recipe';
  constructor( private http: HttpClient ) { }
  createRecipe(recipe: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`,recipe);
  }

  updateRecipe(id:number, recipe: Object): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, recipe);
  }

  getRecipeList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  deleteRecipe(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getRecipeById(id: number): Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getRecipeByDate(date: Date): Observable<any>{
    return this.http.get(`${this.baseURL}/${date}`);
  }


}
