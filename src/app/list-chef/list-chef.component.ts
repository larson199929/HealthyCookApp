import { Component, OnInit } from '@angular/core';
import { ChefService } from '../chef.service';
import{Chef} from '../model/chef';
import{Router} from '@angular/router';

@Component({
  selector: 'app-list-chef',
  templateUrl: './list-chef.component.html',
  styleUrls: ['./list-chef.component.css']
})
export class ListChefComponent implements OnInit {

  lastName: string='';
  chefs: Chef[]=[];

  constructor(private router: Router, private chefService: ChefService) { }

  ngOnInit(): void {
    this.loadDataChefs();
  }

  loadDataChefs(){
    this.chefService.getChefList()
    .subscribe(chefs=>this.chefs=chefs);
  }

  deleteChef(chef: Chef){
    this.chefService.deleteChef(chef.id)
    .subscribe(data=>{this.loadDataChefs();})
  }

  updateChef(chef: Chef){
    this.router.navigate(['actualizar', chef.id]);
  }

  searchChefByLastName(){
    if(this.lastName.length!=0){
      this.chefService.getChefByLastName(this.lastName)
      .subscribe(chefs=>this.chefs=chefs);
    }
    else
      this.loadDataChefs();
  }
}
