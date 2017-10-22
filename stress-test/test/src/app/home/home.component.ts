import { Component, OnInit } from '@angular/core';
import { MealServiceService } from '../meal-service.service';


@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  searchStr: string;
 
  
  constructor(private _mealServiceService: MealServiceService) { }

  locationSearch(event: any){

    this._mealServiceService.searchLoc(this.searchStr)
      .subscribe(res => {
          console.log(res);
      })
    console.log(this.searchStr);
  }


}
