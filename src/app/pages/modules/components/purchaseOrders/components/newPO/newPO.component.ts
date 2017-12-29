import { Component, Input, Output, EventEmitter } from '@angular/core';




@Component({
	selector: 'new-po',
	styleUrls: ['./newPO.scss'],
	templateUrl: './newPO.html',
})
export class NewPO {

	@Input() addNewPO;
	@Output() addNewPOChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	
	newPO = {};

	ngOnChanges() {
	}

	submitNewPO(){
	}

	createToggle() {
		this.addNewPO = !this.addNewPO;
		this.addNewPOChange.emit(this.addNewPO);
	}

	constructor() {
	}

	clear() {
		this.newPO = Object.assign({}, this.newPO);
		
	}
	

	isRemember: boolean = false;

	newPOEmpty = {
		"dbInvoiceNumber": "",
		"dbDateOrderReceived": {
			"year": "",
			"month": "",
			"day": "",
			"hour": "",
			"minute": "",
			"second": ""
		},
		"dbContactNumber": "",
		"dbShipToContact": "",
		"dbBillToContact": "",
		"dbDeliveryDate": "",
		"dbDiscountPercentage": "",
		"dbDiscountAmount": "",
		"dbDepositReceived": "",
		"dbComments": "",
		"dbShippingCost": "",
		"dbCustomerPONumber": "",
		"dbTerms": "",
		"dbShippingMethod": "",
		"dbDateOrderShipped": {
			"year": "",
			"month": "",
			"day": "",
			"hour": "",
			"minute": "",
			"second": ""
		},
		"dbPublicNotes": "",
		"dbPrivateNotes": "",
		"dbSalesTax": "",
		"dbShippingInfo": "",
		"dbLastName": "",
		"dbFirstName": "",
		"dbCompanyName": "",
		"dbAddressLine1": "",
		"dbAddressLine2": "",
		"dbCity": "",
		"dbState": "",
		"dbZipcode": "",
		"dbCountry": "",
		"dbPhone1": "",
		"dbPhone2": "",
		"dbFax1": "",
		"dbFax2": "",
		"dbLabel": "",
		"dbShippingUseless": "",
		"dbHistoricalInvoiceNumber": "",
		"dbEmailAddress": "",
		"dbWebsite": "",
		"dbSubtotal": "",
		"dbNotDiscountedTotal": "",
		"dbTotal": "",
		"dbBalance": "",
		"dbQuote": "",
		"dbProjectNumber": "",
		"dbItemList": "",
		"dbPaid": "",
		"dbInvoiceCompany": ""
	};
 	
}
