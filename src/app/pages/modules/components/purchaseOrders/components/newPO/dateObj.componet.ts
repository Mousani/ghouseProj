import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'date-obj',
    template: `
  <input class="form-control" [ngModel]="dateString | date:'yyyy-MM-dd'" (ngModelChange)="dateString = $event;dateChanged();" type="date" name="startDate"/>
  `
})
export class DateObj {
    @Input() date;
    @Output() dateChange: EventEmitter<object> = new EventEmitter();


    // @Output() addNewInvoiceChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    dateString: string = '';
    constructor() {
        this.date = {
            "year": "",
            "month": "",
            "day": "",
            "hour": "",
            "minute": "",
            "second": ""
        };
    }

    ngOnChanges() {
        if (this.date) {
            this.dateString = this.date['year'] + "-" + (this.date['month'] + 1) + "-" + (this.date['day'] + 1);
        }
    }
    ngDoCheck() {
        this.dateChange.next(this.date);
    }
    dateChanged = function () {
        var dateObj: Date = new Date(this.dateString);
        this.date = {
            "year": dateObj.getFullYear(),
            "month": dateObj.getMonth(),
            "day": dateObj.getDay(),
            "hour": dateObj.getHours(),
            "minute": dateObj.getMinutes(),
            "second": dateObj.getSeconds(),
        };
        console.log(this.date);
    }
}