import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { QuotesService } from './quotes.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Modals } from '../../../../theme/components/modals/modals.component';
import { AddQuotePart } from './components/addQuotePart/addQuotePart.component';
import { DefaultModal } from '../../../../theme/components/modals/default-modal/default-modal.component';

@Component({
  selector: 'quotes',
  templateUrl: './quotes.html',
  styleUrls: ['./quotes.scss']
})
export class Quotes {

    data = [];
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "dbQuoteNumber";
    sortOrder = "desc";
    count = 1;
    addNewQuote = false;
    viewQuoteStatus = false;
    quote = {};
    arrayOfStrings = [];
    quoteParts = [];
    
    ngOnInit() {
      this.activatedRoute
      .queryParams
      .subscribe(params => {
        var invoicenumber = params['invoicenumber']
        if(invoicenumber) {
          var invoiceItem = {};
          this.service.getQuoteObj(invoicenumber).subscribe((invoiceArray) => {
            invoiceItem = invoiceArray[0];
            this.setQuote(invoiceItem);
          });
        }
      });
    }

    public setQuote = (quote) => {  
      console.log(quote);
      this.viewQuoteStatus = true;
      this.quote = quote;
      this.quoteParts = [];
      this.service.getQuoteParts(quote.dbInvoiceNumber).subscribe((quoteParts) => {
        this.quoteParts = quoteParts;
      });
    }

    lgModalShow(part) {
      const activeModal = this.modalService.open(AddQuotePart/*, {size : 'lg'}*/);
      activeModal.componentInstance.modalHeader = 'Part';
      console.log("this.part ", part);
      activeModal.componentInstance.part = part;
    }

    addPart() {
      const activeModal = this.modalService.open(AddQuotePart/*, {size : 'lg'}*/);
      activeModal.componentInstance.modalHeader = 'Part';
      let partSample = Object.assign({}, this.partSample);
      // this.addElement(partSample, 'dbEmails');
      // this.addElement(partSample, 'dbPhoneNumbers');
      activeModal.componentInstance.part = partSample;
      this.quoteParts.push(partSample);
      console.log("this.partSample ", this.partSample)
    }

   

    constructor(private service: QuotesService, private modalService: NgbModal, 
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

  editQuote(quote) {
    this.addNewQuote = !this.addNewQuote;
		this.quote = quote;
		this.viewQuoteStatus = !this.viewQuoteStatus;
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
