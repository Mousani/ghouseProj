import * as _ from 'lodash';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'purchaseOrdersDataFilter'
})
export class purchaseOrdersDataFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=> 
                (row.dbPurchaseOrderNumber.toString()).toLowerCase().indexOf(query.toLowerCase()) > -1 
                || (row.dbVendorNumber && (row.dbVendorNumber.toString()).toLowerCase().indexOf(query.toLowerCase()) > -1 )
                || row.dbPurchaseDate.toLowerCase().indexOf(query.toLowerCase()) > -1 
                // || row.dbPrimaryEmail.toLowerCase().indexOf(query.toLowerCase()) > -1
            );
        }
        return array;
    }
}