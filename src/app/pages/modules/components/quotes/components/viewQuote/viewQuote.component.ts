import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'view-quote',
	styleUrls: ['./viewQuote.scss'],
	templateUrl: './viewQuote.html',
})
export class ViewQuote {
	viewContact = {};

	@Input() quote;
	@Input() viewQuoteStatus;
	@Output() addNewChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	ngOnInit() {
		console.log(this.quote)
		this.viewContact = this.quote;
	}
	backToContacts() {
		this.viewQuoteStatus = !this.viewQuoteStatus;
	}

	submitContact() {
		console.log(this.quote);
	}

	parseValue(key, obj) {
		if(key.indexOf('Date') > -1) {
			return this.toDate(obj);
		}else {
			return obj;
		}
 	}

	labels =  {
		"dbQuoteKey": "Quote Key",
		"dbQuoteNumber": "Quote Number",
		"dbInvoiceNumber": "Invoice Number",
		"dbOrderDate": "Order Date",
		"dbContactNumber": "Quote Number",
		"dbShipTo": "Ship To",
		"dbBillTo": "Bill To",
		"dbDeliveryDate": "Delivery Date",
		"dbDiscountPercent": "Discount Percent",
		"dbDiscountAmount": "Discount Amount",
		"dbDepositReceived": "Deposit Received",
		"dbShippingCost": "Shipping Cost",
		"dbCustomerPO": "Customer PO",
		"dbTerms": "Terms",
		"dbInvoiceDate": "Invoice Date", 
		"dbNotes": "Notes",
		"dbSalesTax": "Sales Tax",
		"dbDateExpires": "Date Expries",
		"dbPaid": "Paid",
		"dbShippingFromTo": "Shipping From To",
		"dbProject": "Project",
		"dbShipToAltAddress": "Ship To Alt Address",
		"dbBillToAltAddress": "Bill To Alt Address",
		"dbPaymentKey": "Payment Key",
		"dbShippingMethod": "Shipping Method",
		"dbTotalPayments": "Total Payments",
		"dbComments": "Comments",
		"dbDatePaid": "Date Paid",
		"dbShipped": "Shipped",
		"dbDateShipped": "Date Shipped",
		"dbInvoiceCompany": "Invoice Company"
	};

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
