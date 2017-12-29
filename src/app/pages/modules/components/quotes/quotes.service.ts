import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';


@Injectable()
export class QuotesService {
	constructor(public http:Http) {}
	dataTableData = [];

//   getData(): Promise<any> {
//     return new Promise((resolve, reject) => {
// 		this.http.get('contacts.json').map(response => {
// 			console.log("loaded");
//             this.dataTableData = response.json();
// 			resolve(this.dataTableData);
// 			reject ("Error!");
//         });
//     });
//   }

  getData() {
	return this.http.get("./assets/json/quote.json")
        .map((res:Response) => this.dataTableData = res.json()); //records in this case
  }

  getQuoteObj(invoiceId) {
    return this.http.get("./assets/json/quote.json")
          .map((res:Response) => res.json())
          .map(invoice => invoice.filter(invoiceObj => invoiceObj.dbQuoteNumber == invoiceId));
  }


  getContactsList() {
    return this.http.get("./assets/json/contacts.json")
          .map((res:Response) => res.json())
          .map(address => address.map(addressObj => addressObj.dbContactNumber));
  }
  
  getQuoteParts(invoiceId) {
    return this.http.get("./assets/json/quoteParts.json")
          .map((res:Response) => res.json())
          .map(invoiceParts => invoiceParts.filter(invoicePartObj => invoicePartObj.dbQuoteNumber === invoiceId));
  }

}
