import { Component, OnInit } from '@angular/core';
import { PurchaseOrdersService } from './purchaseOrders.service';

@Component({
  selector: 'purchaseOrders',
  templateUrl: './purchaseOrders.html',
  styleUrls: ['./purchaseOrders.scss']
})
export class PurchaseOrders {
    data = [];
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "dbPurchaseOrderNumber";
    sortOrder = "asc";
    count = 1;
    addNewPO = false;
    viewPOStatus = false;
    PO = {};

    constructor(private service: PurchaseOrdersService) {
      this.service.getData().subscribe((data) => {
        this.data = data;
      });;

  }

  public setPO = (PO) => {  
    this.viewPOStatus = true;
    this.PO = PO;
    // this.service.getAddress(PO.dbContactNumber).subscribe((address) => {
    //   this.addressOfContact = address;
    // });
    // this.service.getInvoicesofContact(contact.dbContactNumber).subscribe((invoices) => {
    //   this.invoices = invoices;
    // });
  }

  backToList() {
    this.viewPOStatus = false;
  }

    toInt(num: string) {
        return +num;
    }

    sortByWordLength = (a: any) => {
        return a.city.length;
    }
  
}
