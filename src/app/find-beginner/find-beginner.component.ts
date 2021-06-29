import { Component, OnInit } from '@angular/core';
import { Beginner } from '../model/beginner';
import { BeginnerService } from '../beginner.service';

@Component({
  selector: 'app-find-beginner',
  templateUrl: './find-beginner.component.html',
  styleUrls: ['./find-beginner.component.css']
})
export class FindBeginnerComponent implements OnInit {

  id: number = 0;
  dni: string = '';
  beginner: Beginner = new Beginner();
  firstName: string = '';
  lastName: string= '';
  firstName2: string = '';
  lastName2: string= '';
  beginners: Beginner[]=[];
   
  constructor(private beginnerService: BeginnerService) { }

  ngOnInit(): void {
  }

  searchBeginnerById(){
    this.beginnerService.getBeginnerById(this.id)
    .subscribe(beginner=>{
      console.log(beginner)
      this.beginner = beginner});
  }

  searchBeginnerByDNI(){
    this.beginnerService.getBeginnerByDni(this.dni)
    .subscribe(beginners=>{
      console.log(beginners)
      this.beginners = beginners});
  }

  searchBeginnerByFirstName(){
    this.beginnerService.getBeginnerByFirstName(this.firstName)
    .subscribe(beginners => {
      console.log(beginners)
      this.beginners=beginners});
  }

  searchBeginnerByLastName(){
    this.beginnerService.getBeginnerByLastName(this.lastName)
    .subscribe(beginners =>this.beginners=beginners);
  }

  searchBeginnerByFirstNameAndLastName(){
    this.beginnerService.getBeginnerByFirstNameAndLastName(this.firstName2, this.lastName2)
    .subscribe(beginners=>this.beginners = beginners);
  }

}
