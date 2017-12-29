import * as _ from 'lodash';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'costingDataFilter'
})
export class CostingDataFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=> 
                (row.dbPartNumber.toString()).toLowerCase().indexOf(query.toLowerCase()) > -1 
                || (row.dbCategory && (row.dbCategory).toLowerCase().indexOf(query.toLowerCase()) > -1 )
                // || row.dbCompany.toLowerCase().indexOf(query.toLowerCase()) > -1 
                // || row.dbPrimaryEmail.toLowerCase().indexOf(query.toLowerCase()) > -1
            );
        }
        return array;
    }
}