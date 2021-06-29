import { Component, OnInit } from '@angular/core';
import { ChefService } from '../chef.service';
import {Chef} from '../model/chef';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-chef',
  templateUrl: './update-chef.component.html',
  styleUrls: ['./update-chef.component.css']
})
export class UpdateChefComponent implements OnInit {

  id: number = 0;
  chef: Chef= new Chef();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private chefService : ChefService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.chefService.getChefById(this.id)
    .subscribe(datos=>{
      console.log(datos)
      this.chef = datos;
    }, error=>console.log(error));
  }

  updateChef(){
    this.chefService.updateChef(this.id, this.chef)
    .subscribe(datos =>{
      console.log(datos)
      this.router.navigate(['listar']);
    }, error=>console.log(error));
    this.chef = new Chef();
  }

}
