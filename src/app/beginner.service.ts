import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Beginner } from './model/beginner';

@Injectable({
  providedIn: 'root'
})

export class BeginnerService {

    private baseURL= 'https://apphealthycook.herokuapp.com/api/beginners';
  //private baseURL= 'http://localhost:8080/api/beginners';
  //private baseURL= 'http://localhost:5000/beginners';

  constructor( private http: HttpClient) { }

  createBeginner(beginner: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, beginner);
  }

  updateBeginner(id:number, beginner: Object): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, beginner);
  }

  getBeginnerList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  deleteBeginner(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getBeginnerById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getBeginnerByLastName(lastName: string) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchByLastname/${lastName}`);
  }

  getBeginnerByDni(dni: string): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByDni/${dni}`);
  }

  getBeginnerByFirstName(firstName: string): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByFirstname/${firstName}`);
  }

  getBeginnerByFirstNameAndLastName(firstName: string, lastName: string): Observable<any> {
    return this.http.get(`${this.baseURL}/searchByFirstnameAndLastname/${firstName}/${lastName}`);
  }
}
