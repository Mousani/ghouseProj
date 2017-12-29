import * as _ from 'lodash';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'invoiceDataFilter'
})
export class InvoicesDataFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=> 
                (row.dbInvoiceNumber.toString()).toLowerCase().indexOf(query.toLowerCase()) > -1 
                || (row.dbContactNumber && (row.dbContactNumber.toString()).indexOf(query.toLowerCase()) > -1)
                || this.toDate(row.dbDateOrderReceived).toLowerCase().indexOf(query.toLowerCase()) > -1 
                || ((row.dbPaid==0)?"No":"Yes").toLowerCase().indexOf(query.toLowerCase()) > -1
            );
        }
        return array;
    }

    month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    public toDate(dateObj) {
        if(dateObj) 
          return (dateObj.day+1)+"-"+this.month[dateObj.month+1]+"-"+(dateObj.year);
        else 
          return "";
      }
    
}