import { Component, OnInit } from '@angular/core';
import { BeginnerService } from '../beginner.service';
import {Beginner} from '../model/beginner'
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-beginner',
  templateUrl: './update-beginner.component.html',
  styleUrls: ['./update-beginner.component.css']
})
export class UpdateBeginnerComponent implements OnInit {

  id: number = 0;
  beginner: Beginner= new Beginner();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private beginnerService : BeginnerService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.beginnerService.getBeginnerById(this.id)
    .subscribe(datos=>{
      console.log(datos)
      this.beginner = datos;
    }, error=>console.log(error));
  }

  updateBeginner(){
    this.beginnerService.updateBeginner(this.id, this.beginner)
    .subscribe(datos =>{
      console.log(datos)
      this.router.navigate(['listar']);
    }, error=>console.log(error));
    this.beginner = new Beginner();
  }

}
