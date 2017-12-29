import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';
import { FormsModule } from '@angular/forms';

import { Pages } from './pages.component';
import { EditAddress } from './modules/components/contacts/components/editAddress';
import { AddPart } from './modules/components/invoices/components/addPart';
import { AddQuotePart } from './modules/components/quotes/components/addQuotePart';
import { AddressKeysPipe } from './address-keys.pipe';
@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing, FormsModule],
  declarations: [Pages, EditAddress, AddPart, AddQuotePart, AddressKeysPipe],
  entryComponents: [
    EditAddress,
    AddPart,
    AddQuotePart,
  ],
})
export class PagesModule {
}
