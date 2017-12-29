import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modals } from '../../../../../../theme/components/modals/modals.component';
import { EditAddress } from './../editAddress/editAddress.component';


@Component({
	selector: 'inline-form',
	styleUrls: ['./inlineForm.scss'],
	templateUrl: './inlineForm.html',
})
export class InlineForm {

	@Input() addNew;
	@Input() contactEdit;
	@Input() addressArray;
	@Output() addNewChange: EventEmitter<boolean> = new EventEmitter<boolean>();
	contact = {};
	address = [];

	ngOnChanges() {
		console.log("this.contactEdit ",this.contactEdit);
		this.contact = this.contactEdit;
		this.address = this.addressArray;
	}
	ngOnInit() {
		console.log(this.addNew)
	}
	createToggle() {
		console.log(this.addNew)
		this.addNew = !this.addNew;
		this.addNewChange.emit(this.addNew);
		console.log(this.addNew)
	}

	submitContact() {
		console.log(this.contact);
		console.log(this.address);
	}

	addAddress() {
		const activeModal = this.modalService.open(EditAddress/*, {size : 'lg'}*/);
		activeModal.componentInstance.modalHeader = 'Address';
		let addressObj = Object.assign({}, this.addressObj);
		this.addElement(addressObj, 'dbEmails');
		this.addElement(addressObj, 'dbPhoneNumbers');
		activeModal.componentInstance.address = addressObj;
		this.address.push(addressObj);
		console.log("this.addressK ", this.address)
	}

	addElement(array, key) {
		console.log(array[key])
		if(!array[key] || array[key].length == 0 ) {array[key] = [];array[key].push('');}
		return array;
	  }



	contactsCompanyList: [
		"Neoteric Hovercraft, Inc",
		"Hovertechnics, LLC"
	];

	constructor(private modalService: NgbModal) {
		this.contact = Object.assign({}, this.contactEmpty);
		// this.contact.dbContactsCompany = "Neoteric Hovercraft, Inc";
	}

	clear() {
		this.contact = Object.assign({}, this.contactEmpty);
		this.address = [];
	}

	isRemember: boolean = false;
	

	addressObj = {
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


	contactEmpty = {
		"dbDate": "",
		"dbLastName": "",
		"dbFirstName": "",
		"dbCompany": "",
		"dbTitle": "",
		"dbBusinessTitle": "",
		"dbPrimaryEmail": "",
		"dbSecondaryEmail": "",
		"dbWebAddress": "",
		"dbAddNotes": "",
		"dbSource": "",
		"dbCheck": "",
		"dbMailingLabel": "",
		"dbPassword": "",
		"dbSecurityQuestion": "",
		"dbSecurityAnswer": "",
		"dbRegistrationComplete": "",
		"dbHowFind": "",
		"dbWebLook": "",
		"dbWantRec": "",
		"dbWantCom": "",
		"dbWantRes": "",
		"dbWhereUse": "",
		"dbVehicles": "",
		"dbHowMuch": "",
		"dbSelfAssembly": "",
		"dbNeoAssembly": "",
		"dbOtherComments": "",
		"dbHowInterest": "",
		"dbUsr": "",
		"dbIP": "",
		"dbPhone": "",
		"dbAddress": "",
		"dbCity": "",
		"dbState": "",
		"dbCountry": "",
		"dbZip": "",
		"dbType": "",
		"dbContactsCompany": "Neoteric Hovercraft, Inc"
	};


	titles = [
		{
			"code": 1,
			"name": "Mr"
		},
		{
			"code": 2,
			"name": "Mrs"
		},
		{
			"code": 3,
			"name": "Ms"
		},
		{
			"code": 4,
			"name": "Miss"
		},
		{
			"code": 5,
			"name": "Mr/Mrs"
		},
		{
			"code": 6,
			"name": "Mr/Ms"
		},
		{
			"code": 7,
			"name": "Mr/Miss"
		},
		{
			"code": 8,
			"name": "Dr"
		},
		{
			"code": 9,
			"name": "Herr"
		},
		{
			"code": 10,
			"name": "Monsieur"
		},
		{
			"code": 11,
			"name": "Hr"
		},
		{
			"code": 12,
			"name": "Frau"
		},
		{
			"code": 13,
			"name": "A V M"
		},
		{
			"code": 14,
			"name": "Admiraal"
		},
		{
			"code": 15,
			"name": "Admiral"
		},
		{
			"code": 16,
			"name": "Air Cdre"
		},
		{
			"code": 17,
			"name": "Air Commodore"
		},
		{
			"code": 18,
			"name": "Air Marshal"
		},
		{
			"code": 19,
			"name": "Air Vice Marshal"
		},
		{
			"code": 20,
			"name": "Alderman"
		},
		{
			"code": 21,
			"name": "Alhaji"
		},
		{
			"code": 22,
			"name": "Ambassador"
		},
		{
			"code": 23,
			"name": "Baron"
		},
		{
			"code": 24,
			"name": "Barones"
		},
		{
			"code": 25,
			"name": "Brig"
		},
		{
			"code": 26,
			"name": "Brig Gen"
		},
		{
			"code": 27,
			"name": "Brig General"
		},
		{
			"code": 28,
			"name": "Brigadier"
		},
		{
			"code": 29,
			"name": "Brigadier General"
		},
		{
			"code": 30,
			"name": "Brother"
		},
		{
			"code": 31,
			"name": "Canon"
		},
		{
			"code": 32,
			"name": "Capt"
		},
		{
			"code": 33,
			"name": "Captain"
		},
		{
			"code": 34,
			"name": "Cardinal"
		},
		{
			"code": 35,
			"name": "Cdr"
		},
		{
			"code": 36,
			"name": "Chief"
		},
		{
			"code": 37,
			"name": "Cik"
		},
		{
			"code": 38,
			"name": "Cmdr"
		},
		{
			"code": 39,
			"name": "Col"
		},
		{
			"code": 40,
			"name": "Col Dr"
		},
		{
			"code": 41,
			"name": "Colonel"
		},
		{
			"code": 42,
			"name": "Commandant"
		},
		{
			"code": 43,
			"name": "Commander"
		},
		{
			"code": 44,
			"name": "Commissioner"
		},
		{
			"code": 45,
			"name": "Commodore"
		},
		{
			"code": 46,
			"name": "Comte"
		},
		{
			"code": 47,
			"name": "Comtessa"
		},
		{
			"code": 48,
			"name": "Congressman"
		},
		{
			"code": 49,
			"name": "Conseiller"
		},
		{
			"code": 50,
			"name": "Consul"
		},
		{
			"code": 51,
			"name": "Conte"
		},
		{
			"code": 52,
			"name": "Contessa"
		},
		{
			"code": 53,
			"name": "Corporal"
		},
		{
			"code": 54,
			"name": "Councillor"
		},
		{
			"code": 55,
			"name": "Count"
		},
		{
			"code": 56,
			"name": "Countess"
		},
		{
			"code": 57,
			"name": "Crown Prince"
		},
		{
			"code": 58,
			"name": "Crown Princess"
		},
		{
			"code": 59,
			"name": "Dame"
		},
		{
			"code": 60,
			"name": "Datin"
		},
		{
			"code": 61,
			"name": "Dato"
		},
		{
			"code": 62,
			"name": "Datuk"
		},
		{
			"code": 63,
			"name": "Datuk Seri"
		},
		{
			"code": 64,
			"name": "Deacon"
		},
		{
			"code": 65,
			"name": "Deaconess"
		},
		{
			"code": 66,
			"name": "Dean"
		},
		{
			"code": 67,
			"name": "Dhr"
		},
		{
			"code": 68,
			"name": "Dipl Ing"
		},
		{
			"code": 69,
			"name": "Doctor"
		},
		{
			"code": 70,
			"name": "Dott"
		},
		{
			"code": 71,
			"name": "Dott sa"
		},
		{
			"code": 72,
			"name": "Dr Ing"
		},
		{
			"code": 73,
			"name": "Dra"
		},
		{
			"code": 74,
			"name": "Drs"
		},
		{
			"code": 75,
			"name": "Embajador"
		},
		{
			"code": 76,
			"name": "Embajadora"
		},
		{
			"code": 77,
			"name": "En"
		},
		{
			"code": 78,
			"name": "Encik"
		},
		{
			"code": 79,
			"name": "Eng"
		},
		{
			"code": 80,
			"name": "Eur Ing"
		},
		{
			"code": 81,
			"name": "Exma Sra"
		},
		{
			"code": 82,
			"name": "Exmo Sr"
		},
		{
			"code": 83,
			"name": "F O"
		},
		{
			"code": 84,
			"name": "Father"
		},
		{
			"code": 85,
			"name": "First Lieutient"
		},
		{
			"code": 86,
			"name": "First Officer"
		},
		{
			"code": 87,
			"name": "Flt Lieut"
		},
		{
			"code": 88,
			"name": "Flying Officer"
		},
		{
			"code": 89,
			"name": "Fr"
		},
		{
			"code": 90,
			"name": "Fraulein"
		},
		{
			"code": 91,
			"name": "Fru"
		},
		{
			"code": 92,
			"name": "Gen"
		},
		{
			"code": 93,
			"name": "Generaal"
		},
		{
			"code": 94,
			"name": "General"
		},
		{
			"code": 95,
			"name": "Governor"
		},
		{
			"code": 96,
			"name": "Graaf"
		},
		{
			"code": 97,
			"name": "Gravin"
		},
		{
			"code": 98,
			"name": "Group Captain"
		},
		{
			"code": 99,
			"name": "Grp Capt"
		},
		{
			"code": 100,
			"name": "H E Dr"
		},
		{
			"code": 101,
			"name": "H H"
		},
		{
			"code": 102,
			"name": "H M"
		},
		{
			"code": 103,
			"name": "H R H"
		},
		{
			"code": 104,
			"name": "Hajah"
		},
		{
			"code": 105,
			"name": "Haji"
		},
		{
			"code": 106,
			"name": "Hajim"
		},
		{
			"code": 107,
			"name": "Her Highness"
		},
		{
			"code": 108,
			"name": "Her Majesty"
		},
		{
			"code": 109,
			"name": "High Chief"
		},
		{
			"code": 110,
			"name": "His Highness"
		},
		{
			"code": 111,
			"name": "His Holiness"
		},
		{
			"code": 112,
			"name": "His Majesty"
		},
		{
			"code": 113,
			"name": "Hon"
		},
		{
			"code": 114,
			"name": "Hra"
		},
		{
			"code": 115,
			"name": "Ing"
		},
		{
			"code": 116,
			"name": "Ir"
		},
		{
			"code": 117,
			"name": "Jonkheer"
		},
		{
			"code": 118,
			"name": "Judge"
		},
		{
			"code": 119,
			"name": "Justice"
		},
		{
			"code": 120,
			"name": "Khun Ying"
		},
		{
			"code": 121,
			"name": "Kolonel"
		},
		{
			"code": 122,
			"name": "Lady"
		},
		{
			"code": 123,
			"name": "Lcda"
		},
		{
			"code": 124,
			"name": "Lic"
		},
		{
			"code": 125,
			"name": "Lieut"
		},
		{
			"code": 126,
			"name": "Lieut Cdr"
		},
		{
			"code": 127,
			"name": "Lieut Col"
		},
		{
			"code": 128,
			"name": "Lieut Gen"
		},
		{
			"code": 129,
			"name": "Lord"
		},
		{
			"code": 130,
			"name": "M"
		},
		{
			"code": 131,
			"name": "M L"
		},
		{
			"code": 132,
			"name": "M R"
		},
		{
			"code": 133,
			"name": "Madame"
		},
		{
			"code": 134,
			"name": "Mademoiselle"
		},
		{
			"code": 135,
			"name": "Maj Gen"
		},
		{
			"code": 136,
			"name": "Major"
		},
		{
			"code": 137,
			"name": "Master"
		},
		{
			"code": 138,
			"name": "Mevrouw"
		},
		{
			"code": 139,
			"name": "Mlle"
		},
		{
			"code": 140,
			"name": "Mme"
		},
		{
			"code": 141,
			"name": "Monsignor"
		},
		{
			"code": 142,
			"name": "Mstr"
		},
		{
			"code": 143,
			"name": "Nti"
		},
		{
			"code": 144,
			"name": "Officer"
		},
		{
			"code": 145,
			"name": "Pastor"
		},
		{
			"code": 146,
			"name": "President"
		},
		{
			"code": 147,
			"name": "Prince"
		},
		{
			"code": 148,
			"name": "Princess"
		},
		{
			"code": 149,
			"name": "Princesse"
		},
		{
			"code": 150,
			"name": "Prinses"
		},
		{
			"code": 151,
			"name": "Prof"
		},
		{
			"code": 152,
			"name": "Prof Dr"
		},
		{
			"code": 153,
			"name": "Prof Sir"
		},
		{
			"code": 154,
			"name": "Professor"
		},
		{
			"code": 155,
			"name": "Puan"
		},
		{
			"code": 156,
			"name": "Puan Sri"
		},
		{
			"code": 157,
			"name": "Rabbi"
		},
		{
			"code": 158,
			"name": "Rear Admiral"
		},
		{
			"code": 159,
			"name": "Rev"
		},
		{
			"code": 160,
			"name": "Rev Canon"
		},
		{
			"code": 161,
			"name": "Rev Dr"
		},
		{
			"code": 162,
			"name": "Rev Mother"
		},
		{
			"code": 163,
			"name": "Reverend"
		},
		{
			"code": 164,
			"name": "Rva"
		},
		{
			"code": 165,
			"name": "Senator"
		},
		{
			"code": 166,
			"name": "Sergeant"
		},
		{
			"code": 167,
			"name": "Sheikh"
		},
		{
			"code": 168,
			"name": "Sheikha"
		},
		{
			"code": 169,
			"name": "Sig"
		},
		{
			"code": 170,
			"name": "Sig na"
		},
		{
			"code": 171,
			"name": "Sig ra"
		},
		{
			"code": 172,
			"name": "Sir"
		},
		{
			"code": 173,
			"name": "Sister"
		},
		{
			"code": 174,
			"name": "Sqn Ldr"
		},
		{
			"code": 175,
			"name": "Sr"
		},
		{
			"code": 176,
			"name": "Sr D"
		},
		{
			"code": 177,
			"name": "Sra"
		},
		{
			"code": 178,
			"name": "Srta"
		},
		{
			"code": 179,
			"name": "Sultan"
		},
		{
			"code": 180,
			"name": "Tan Sri"
		},
		{
			"code": 181,
			"name": "Tan Sri Dato"
		},
		{
			"code": 182,
			"name": "Tengku"
		},
		{
			"code": 183,
			"name": "Teuku"
		},
		{
			"code": 184,
			"name": "Than Puying"
		},
		{
			"code": 185,
			"name": "The Hon Dr"
		},
		{
			"code": 186,
			"name": "The Hon Justice"
		},
		{
			"code": 187,
			"name": "The Hon Miss"
		},
		{
			"code": 188,
			"name": "The Hon Mr"
		},
		{
			"code": 189,
			"name": "The Hon Mrs"
		},
		{
			"code": 190,
			"name": "The Hon Ms"
		},
		{
			"code": 191,
			"name": "The Hon Sir"
		},
		{
			"code": 192,
			"name": "The Very Rev"
		},
		{
			"code": 193,
			"name": "Toh Puan"
		},
		{
			"code": 194,
			"name": "Tun"
		},
		{
			"code": 195,
			"name": "Vice Admiral"
		},
		{
			"code": 196,
			"name": "Viscount"
		},
		{
			"code": 197,
			"name": "Viscountess"
		},
		{
			"code": 198,
			"name": "Wg Cdr"
		},
	];




	
}
