import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'view-invoice',
	styleUrls: ['./viewInvoice.scss'],
	templateUrl: './viewInvoice.html',
})
export class ViewInvoice {
	viewContact = {};

	@Input() invoice;
	@Input() viewInvoiceStatus;
	@Output() addNewChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	ngOnInit() {
		console.log(this.invoice)
		this.viewContact = this.invoice;
	}
	backToContacts() {
		this.viewInvoiceStatus = !this.viewInvoiceStatus;
	}

	submitContact() {
		console.log(this.invoice);
	}

	parseValue(key, obj) {
		if(key.indexOf('Date') > -1) {
			return this.toDate(obj);
		}else {
			return obj;
		}
 	}

	labels =  {
		"dbInvoiceNumber": "InvoiceNumber",
		"dbDateOrderReceived": "Date Order Received",
		"dbContactNumber": "Contact Number",
		"dbShipToContact": "Ship To Contact",
		"dbBillToContact": "Bill To Contact",
		"dbDeliveryDate": "Delivary Date",
		"dbDiscountPercentage": "Discount Percentage",
		"dbDiscountAmount": "Discount Amount",
		"dbDepositReceived": "Desposit Recieved",
		"dbComments": "Comments",
		"dbShippingCost": "Shipping Cost",
		"dbCustomerPONumber": "Customer PO Number",
		"dbTerms": "Terms",
		"dbShippingMethod": "Shipping Method",
		"dbDateOrderShipped": "Date Order Shipped",
		"dbPublicNotes": "Public Notes",
		"dbPrivateNotes": "Private Notes",
		"dbSalesTax": "Sales Tax",
		"dbShippingInfo": "Shipping Info",
		"dbLastName": "Last Name",
		"dbFirstName": "First Name",
		"dbCompanyName": "Company Name",
		"dbAddressLine1": "Address Line1",
		"dbAddressLine2": "Address Line2",
		"dbCity": "City",
		"dbState": "State",
		"dbZipcode": "ZipCode",
		"dbCountry": "Country",
		"dbPhone1": "Phone1",
		"dbPhone2": "Phone2",
		"dbFax1": "Fax1",
		"dbFax2": "Fax2",
		"dbLabel": "Label",
		"dbShippingUseless": "Shipping Useless",
		"dbHistoricalInvoiceNumber": "Historical Invoice Number",
		"dbEmailAddress": "Email Address",
		"dbWebsite": "Website",
		"dbSubtotal": "Subtotal",
		"dbNotDiscountedTotal": "Not Discounted Total",
		"dbTotal": "Total",
		"dbBalance": "Balance",
		"dbQuote": "Quote",
		"dbProjectNumber": "Project Number",
		"dbItemList": "Item List",
		"dbPaid": "Paid",
		"dbInvoiceCompany": "Invoie Company"
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
