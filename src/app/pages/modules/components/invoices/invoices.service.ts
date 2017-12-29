import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';


@Injectable()
export class InvoicesService {
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
	return this.http.get("./assets/json/invoiceOrders.json")
        .map((res:Response) => this.dataTableData = res.json()); //records in this case
  }

  getInvoiceObj(invoiceId) {
    return this.http.get("./assets/json/invoiceOrders.json")
          .map((res:Response) => res.json())
          .map(invoice => invoice.filter(invoiceObj => invoiceObj.dbInvoiceNumber == invoiceId));
  }


  getContactsList() {
    return this.http.get("./assets/json/contacts.json")
          .map((res:Response) => res.json())
          .map(address => address.map(addressObj => addressObj.dbContactNumber));
  }
  
  getInvoiceParts(invoiceId) {
    return this.http.get("./assets/json/invoiceParts.json")
          .map((res:Response) => res.json())
          .map(invoiceParts => invoiceParts.filter(invoicePartObj => invoicePartObj.dbInvoiceNumber === invoiceId));
  }

}
