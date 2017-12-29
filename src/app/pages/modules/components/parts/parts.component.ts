import { Component, OnInit } from '@angular/core';
import { PartsService } from './parts.service';

@Component({
  selector: 'parts',
  templateUrl: './parts.html',
  styleUrls: ['./parts.scss']
})
export class Parts {

    data = [];
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "dbContactNumber";
    sortOrder = "asc";
    count = 1;
    addNew = false;

    

    constructor(private service: PartsService) {
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
