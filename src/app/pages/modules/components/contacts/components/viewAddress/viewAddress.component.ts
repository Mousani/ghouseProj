import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'view-address',
	styleUrls: ['./viewAddress.scss'],
	templateUrl: './viewAddress.html',
})
export class ViewAddress {
	viewAddress = {};

	@Input() address;
	@Input() viewContactStatus;
	@Output() addNewChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	ngOnInit() {
		console.log(this.address)
		this.viewAddress = this.address;
	}
	backToContacts() {
		this.viewContactStatus = this.viewContactStatus;
	}

	submitContact() {
		console.log(this.viewAddress);
	}

	parseValue(value) {
		if(value === "Y") return "YES";
		else if(value === "N") return "NO";
		else return value;
	}

	labels =  {
		"dbContactNumber": "Contact Number",
		"dbAddress": "Address",
		"dbCity": "City",
		"dbState": "State",
		"dbZip": "ZIP",
		"dbCountry": "Country",
		"dbAddressType": "Address Type",
		"dbTitle": "Title",
		"dbFirstName": "First Name",
		"dbLastName": "Last Name",
		"dbBusinessTitle": "Business Title",
		"dbCompany": "Company",
		"dbProvince": "Province",
		"dbAddressKey": "Address Key",
		"dbType": "Type",
		"dbAddressLabel": "Address Label",
		"dbNumberKeys": "Number Keys",
		"dbEmail": "Email"
	};
	constructor() {
	}
}
