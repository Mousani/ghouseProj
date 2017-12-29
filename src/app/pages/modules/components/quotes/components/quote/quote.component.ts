import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modals } from '../../../../../../theme/components/modals/modals.component';
import { QuotesService } from '../../quotes.service';



@Component({
	selector: 'quote',
	styleUrls: ['./quote.scss'],
	templateUrl: './quote.html',
})
export class Quote {

	@Input() addNewQuote;
	@Input() quoteEdit;
	@Input() arrayOfStrings;
	@Input() addressArray;
	@Output() addNewQuoteChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	quote = {};

	ngOnChanges() {
		// console.log("this.invoiceEdit ",this.invoiceEdit);
		this.quote = Object.assign({}, this.quoteEdit);;
	}

	submitQuote(){
		this.quoteEdit = this.quote;
		this.addNewQuote = !this.addNewQuote;
		this.addNewQuoteChange.emit(this.addNewQuote);
	}

	createToggle() {
		this.addNewQuote = !this.addNewQuote;
		this.addNewQuoteChange.emit(this.addNewQuote);
	}

	constructor(private modalService: NgbModal,private service: QuotesService) {
		this.quote = Object.assign({}, this.quoteEmpty);
	}
	
	clear() {
		this.quote = Object.assign({}, this.quoteEmpty);
	}
	

	

	isRemember: boolean = false;

	quoteEmpty = {
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
