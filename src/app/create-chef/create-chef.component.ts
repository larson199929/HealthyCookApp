import { Component, OnInit } from '@angular/core';
import { ChefService } from '../chef.service';
import { Chef } from '../model/chef'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-chef',
  templateUrl: './create-chef.component.html',
  styleUrls: ['./create-chef.component.css']
})
export class CreateChefComponent implements OnInit {

  chef: Chef = new Chef();

  constructor( private route: ActivatedRoute,
    private router : Router,
    private chefService: ChefService) { }

  ngOnInit(): void {
  }

  insertChef(){
    this.chefService.createChef(this.chef)
      .subscribe(datos=>console.log(datos), error=>console.log(error));
      this.chef = new Chef();
      this.router.navigate(['listar']);
  }

}
