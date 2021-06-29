import { Component, OnInit } from '@angular/core';
import { Chef } from '../model/chef';
import { ChefService } from '../chef.service';

@Component({
  selector: 'app-find-chef',
  templateUrl: './find-chef.component.html',
  styleUrls: ['./find-chef.component.css']
})
export class FindChefComponent implements OnInit {

  id: number = 0;
  dni: string = '';
  chef: Chef = new Chef();
  firstName: string = '';
  lastName: string= '';
  firstName2: string = '';
  lastName2: string= '';
  chefs: Chef[]=[];

  constructor(private chefService: ChefService) { }

  ngOnInit(): void {
  }

  searchChefById(){
    this.chefService.getChefById(this.id)
    .subscribe(chef=>{
      console.log(chef)
      this.chef = chef});
  }

  searchChefByDNI(){
    this.chefService.getChefByDni(this.dni)
    .subscribe(chefs=>{
      console.log(chefs)
      this.chefs = chefs});
  }

  searchChefByFirstName(){
    this.chefService.getChefByFirstName(this.firstName)
    .subscribe(chefs => {
      console.log(chefs)
      this.chefs=chefs});
  }

  searchChefByLastName(){
    this.chefService.getChefByLastName(this.lastName)
    .subscribe(chefs =>this.chefs=chefs);
  }

  searchChefByFirstNameAndLastName(){
    this.chefService.getChefByFirstNameAndLastName(this.firstName2, this.lastName2)
    .subscribe(chefs=>this.chefs = chefs);
  }
}
