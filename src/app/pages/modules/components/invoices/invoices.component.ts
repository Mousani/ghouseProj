import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { InvoicesService } from './invoices.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modals } from '../../../../theme/components/modals/modals.component';
import { AddPart } from './components/addPart/addPart.component';
import { DefaultModal } from '../../../../theme/components/modals/default-modal/default-modal.component';

@Component({
  selector: 'invoices',
  templateUrl: './invoices.html',
  styleUrls: ['./invoices.scss']
})  
export class Invoices {

    data = [];
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "dbInvoiceNumber";
    sortOrder = "desc";
    count = 1;
    addNewInvoice = false;
    viewInvoiceStatus = false;
    invoice = {};
    arrayOfStrings = [];
    invoiceParts = [];
    partSampleNew = {};
    
    ngOnInit() {
      this.activatedRoute
      .queryParams
      .subscribe(params => {
        var invoicenumber = params['invoicenumber']
        if(invoicenumber) {
          var invoiceItem = {};
          this.service.getInvoiceObj(invoicenumber).subscribe((invoiceArray) => {
            invoiceItem = invoiceArray[0];
            this.setInvoice(invoiceItem);
          });
        }
      });
    }

    public setInvoice = (invoice) => {  
      console.log(invoice);
      this.viewInvoiceStatus = true;
      this.invoice = invoice;
      this.invoiceParts = [];
      this.service.getInvoiceParts(invoice.dbInvoiceNumber).subscribe((invoiceParts) => {
        this.invoiceParts = invoiceParts;
      });
    }

    lgModalShow(part) {
      const activeModal = this.modalService.open(AddPart/*, {size : 'lg'}*/);
      activeModal.componentInstance.modalHeader = 'Part';
      console.log("this.part ", part);
      activeModal.componentInstance.part = part;
    }

    addPart() {
      const activeModal = this.modalService.open(AddPart/*, {size : 'lg'}*/);
      activeModal.componentInstance.modalHeader = 'Part';
      this.partSampleNew = Object.assign({}, this.partSample);
      console.log("this.invoiceParts1",this.invoiceParts);
      // this.addElement(partSample, 'dbEmails');
      // this.addElement(partSample, 'dbPhoneNumbers');
      activeModal.componentInstance.part = this.partSampleNew;
      activeModal.componentInstance.invoiceParts = this.invoiceParts;
      activeModal.componentInstance.addPartToList = function(invoiceParts,partSampleNew) {
        console.log("this.invoiceParts2",invoiceParts);
        invoiceParts.push(partSampleNew);
        
        console.log("this.partSample ", this.partSample)
      };
     
    }

    

   

    constructor(private service: InvoicesService, private modalService: NgbModal, 
      private activatedRoute: ActivatedRoute) {
      this.service.getData().subscribe((data) => {
        this.data = data;
      });;
      this.service.getContactsList().subscribe((data) => {
        this.arrayOfStrings = data;
        console.log("data ", data)
      });
    // this.service.getData().then((data) => {
    //   console.log(data);
    //   this.data = data;
    // }).catch(function(e) {
    //   console.log(e); // "oh, no!"
    // });
    
  }

  month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  public toDate(dateObj) {
    if(dateObj) 
      return (dateObj.day+1)+"-"+this.month[dateObj.month+1]+"-"+(dateObj.year);
    else 
      return "";
  }

  editInvoice(invoice) {
    this.addNewInvoice = !this.addNewInvoice;
		this.invoice = invoice;
		this.viewInvoiceStatus = !this.viewInvoiceStatus;
	  }

    toInt(num: string) {
        return +num;
    }

    sortByWordLength = (a: any) => {
        return a.city.length;
    }

    partSample = {
      "dbInvoiceNumber": "",
      "dbLineNumber": "",
      "dbPartNumber": "",
      "dbTypeOfPart": "",
      "dbRouteUseless": "",
      "dbRouteRevUseless": "",
      "dbDescription": "",
      "dbQty": "",
      "dbCurrentQtyUseless": "",
      "dbFinishedQtyUseless": "",
      "dbUnitCost": "",
      "dbNotDiscountedCost": "",
      "dbNote": "",
      "dbExtendedCost": "",
      "dbNotDiscountedExtendedCost": "",
      "dbNotDiscounted": "",
      "dbExplodedPart": "",
      "dbProjectNumber": "",
      "dbQtyInStock": "",
      "dbUpdatedUseless": "",
      "dbExplodePart": "",
      "dbSerialNumber": "",
    };
  
}
