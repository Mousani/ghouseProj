import { Component,Input,  OnInit, Output, EventEmitter} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'add-quote-part',
  styleUrls: [('./addQuotePart.scss')],
  templateUrl: './addQuotePart.html'
})

export class AddQuotePart implements OnInit {

	@Input() partInput;
	@Output() addNewChange: EventEmitter<object> = new EventEmitter<object>();

	ngOnChanges() {
		console.log("this.partInput ",this.partInput);
		this.part = Object.assign({}, this.partInput);
	}

  modalHeader: string;
  part = {
    // "dbInvoiceNumber": 11,
		// "dbLineNumber": 0,
		// "dbPartNumber": 1639,
		// "dbTypeOfPart": null,
		// "dbRouteUseless": 0,
		// "dbRouteRevUseless": 0,
		// "dbDescription": "Nonslip Floor Coating",
		// "dbQty": 1.0,
		// "dbCurrentQtyUseless": 0.0,
		// "dbFinishedQtyUseless": 0.0,
		// "dbUnitCost": 0.0,
		// "dbNotDiscountedCost": 0.0,
		// "dbNote": null,
		// "dbExtendedCost": 0.0,
		// "dbNotDiscountedExtendedCost": 0.0,
		// "dbNotDiscounted": null,
		// "dbExplodedPart": "*",
		// "dbProjectNumber": 10051,
		// "dbQtyInStock": 0,
		// "dbUpdatedUseless": null,
		// "dbExplodePart": "0",
		// "dbSerialNumber": null
		"dbContactNumber": "",
		"dbAddress": "",
		"dbCity": "",
		"dbState": "",
		"dbZip": "",
		"dbCountry": "",
		"dbAddressType": "",
		"dbTitle": "",
		"dbFirstName": "",
		"dbLastName": "",
		"dbBusinessTitle": "",
		"dbCompany": "",
		"dbProvince": "",
		"dbAddressKey": "",
		"dbType": "",
		"dbAddressLabel": "",
		"dbNumberKeys": "",
    "dbEmail": "",
    "dbEmails": [],
    "dbPhoneNumbers": [],
  };
  
	
	addElement(array, key) {
		console.log(array[key])
		if(!array[key]) array[key] = [];
		array[key].push('');
	}
	deleteElement(array, key, index) {
		array[key].splice(index, 1);
	}


	trackByIndex(index: number, value: number) {
    return index;
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

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {}

  closeModal() {
		this.addNewChange.emit(this.partInput);
    this.activeModal.close();
  }
}
