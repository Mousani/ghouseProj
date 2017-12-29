import { Component, OnInit } from '@angular/core';
import { CostingService } from './costing.service';

@Component({
  selector: 'costing',
  templateUrl: './costing.html',
  styleUrls: ['./costing.scss']
})
export class Costing {

    data = [];
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "dbContactNumber";
    sortOrder = "asc";
    count = 1;
    addNew = false;

    

    constructor(private service: CostingService) {
      this.service.getData().subscribe((data) => {
        this.data = data;
      });;
    // this.service.getData().then((data) => {
    //   console.log(data);
    //   this.data = data;
    // }).catch(function(e) {
    //   console.log(e); // "oh, no!"
    // });
    
  }

    toInt(num: string) {
        return +num;
    }

    sortByWordLength = (a: any) => {
        return a.city.length;
    }
  
}
