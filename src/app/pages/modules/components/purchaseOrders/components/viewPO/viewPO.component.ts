import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'view-purchase-order',
	styleUrls: ['./viewPO.scss'],
	templateUrl: './viewPO.html',
})
export class ViewPO {
	viewPO = {};

	@Input() PO;
	@Input() viewPOStatus;
	@Output() addNewChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	ngOnInit() {
		console.log(this.PO)
		this.viewPO = this.PO;
	}
	backToPOs() {
		this.viewPOStatus = this.viewPOStatus;
	}

	submitPO() {
		console.log(this.PO);
	}

	parseValue(value) {
		if(value === "Y") return "YES";
		else if(value === "N") return "NO";
		else return value;
	}

	labels =  {"dbPurchaseOrderNumber":"Purchase Order Number",
	"dbPurchaseDate":"Purchase Date", 
	"dbVendorNumber":"Vendor Number", 
	"dbDateRequired":"Date Required", 
	"dbHowToShip":"How To ship",
	"dbShippingCost":"Shipping Cost",
	"dbNotes":"Notes",
	"dbDateSent":"Data Sent",
	"dbActualShippingCost":"Actual Shipping",
	"dbShipTo":"Ship To",
	"dbReceived":"Received", 
	"dbDateReceived":"Date Received", 
	"dbPurchaseCompany":"Purchase Company"};
	constructor() {
	}
}
