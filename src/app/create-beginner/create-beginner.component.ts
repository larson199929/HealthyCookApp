import { Component, OnInit } from '@angular/core';
import { BeginnerService } from '../beginner.service';
import { Beginner } from '../model/beginner'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-beginner',
  templateUrl: './create-beginner.component.html',
  styleUrls: ['./create-beginner.component.css']
})
export class CreateBeginnerComponent implements OnInit {

  beginner: Beginner = new Beginner();
  
  constructor(private route: ActivatedRoute,
    private router : Router,
    private beginnerService: BeginnerService) { }

  ngOnInit(): void {
  }

  insertBeginner(){
    this.beginnerService.createBeginner(this.beginner)
      .subscribe(datos=>console.log(datos), error=>console.log(error));
      this.beginner = new Beginner();
      this.router.navigate(['listar']);
  }

}
