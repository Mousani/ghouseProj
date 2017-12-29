import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'quote-parts',
	styleUrls: ['./quoteParts.scss'],
	templateUrl: './quoteParts.html',
})
export class QuoteParts {
	viewContact = {};

	@Input() quoteParts;
	@Input() viewQuoteStatus;
	@Output() addNewChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	ngOnInit() {
		console.log(this.quoteParts)
	}
	backToContacts() {
		this.viewQuoteStatus = !this.viewQuoteStatus;
	}

	submitContact() {
	}

	parseValue(key, obj) {
		if(key.indexOf('Date') > -1) {
			return this.toDate(obj);
		}else {
			return obj;
		}
 	}

	month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	
	  public toDate(dateObj) {
		if(dateObj) 
		  return (dateObj.day+1)+"-"+this.month[dateObj.month+1]+"-"+(dateObj.year);
		else 
		  return "";
	  }
	

	constructor() {
	}
}
