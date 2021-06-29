import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Chef } from './model/chef';

@Injectable({
  providedIn: 'root'
})

export class ChefService {

private baseURL= 'https://apphealthycook.herokuapp.com/api/chefs';
  //private baseURL= 'http://localhost:5000/chefs';

  constructor( private http: HttpClient) { }

  createChef(chef: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, chef);
  }

  updateChef(id:number, chef: Object): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, chef);
  }

  getChefList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  deleteChef(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getChefById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getChefByLastName(lastName: string) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchByLastname/${lastName}`);
  }

  getChefByDni(dni: string): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByDni/${dni}`);
  }

  getChefByFirstName(firstName: string): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByFirstname/${firstName}`);
  }

  getChefByFirstNameAndLastName(firstName: string, lastName: string): Observable<any> {
    return this.http.get(`${this.baseURL}/searchByFirstnameAndLastname/${firstName}/${lastName}`);
  }
}
