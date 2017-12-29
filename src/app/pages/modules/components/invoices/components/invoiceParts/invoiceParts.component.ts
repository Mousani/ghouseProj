import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'invoice-parts',
	styleUrls: ['./invoiceParts.scss'],
	templateUrl: './invoiceParts.html',
})
export class InvoiceParts {
	viewContact = {};

	@Input() invoiceParts;
	@Input() viewInvoiceStatus;
	@Output() addNewChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	ngOnInit() {
		console.log(this.invoiceParts)
	}
	backToContacts() {
		this.viewInvoiceStatus = !this.viewInvoiceStatus;
	}

	submitContact() {
	}

	deleteElement(invoicePartIndex) {
		this.invoiceParts.splice(invoicePartIndex, 1);
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
