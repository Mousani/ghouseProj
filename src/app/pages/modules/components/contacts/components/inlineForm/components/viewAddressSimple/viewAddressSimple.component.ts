import {Component, Input} from '@angular/core';


@Component({
  selector: 'view-address-simple',
  templateUrl: './viewAddressSimple.html',
  styleUrls: ['./viewAddressSimple.scss']
})
export class ViewAddressSimple {
  @Input() address;
  @Input() index;
  
  public feed:Array<Object>;

  constructor() {
  }


  expandMessage (message){
    message.expanded = !message.expanded;
  }
}
