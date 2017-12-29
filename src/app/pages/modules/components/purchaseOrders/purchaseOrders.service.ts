import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';


@Injectable()
export class PurchaseOrdersService {
	constructor(public http:Http) {}
	dataTableData = [];

  getData() {
	return this.http.get("./assets/json/purchaseOrders.json")
        .map((res:Response) => this.dataTableData = res.json()); //records in this case
  }

}
