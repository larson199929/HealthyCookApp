import { Component, OnInit } from '@angular/core';
import { BeginnerService } from '../beginner.service';
import {Beginner} from '../model/beginner'
import{Router} from '@angular/router';

@Component({
  selector: 'app-list-beginner',
  templateUrl: './list-beginner.component.html',
  styleUrls: ['./list-beginner.component.css']
})
export class ListBeginnerComponent implements OnInit {

  lastName: string='';
  beginners: Beginner[]=[];

  constructor(private router: Router, private beginnerService: BeginnerService) { }

  ngOnInit(): void {
    this.loadDataBeginners();
  }

  loadDataBeginners(){
    this.beginnerService.getBeginnerList()
    .subscribe(beginners=>this.beginners=beginners);
  }

  deleteBeginner(beginner: Beginner){
    this.beginnerService.deleteBeginner(beginner.id)
    .subscribe(data=>{this.loadDataBeginners();})
  }

  updateBeginner(beginner: Beginner){
    this.router.navigate(['actualizar', beginner.id]);
  }

  searchBeginnerByLastName(){
    if(this.lastName.length!=0){
      this.beginnerService.getBeginnerByLastName(this.lastName)
      .subscribe(beginners=>this.beginners=beginners);
    }
    else
      this.loadDataBeginners();
  }

}
